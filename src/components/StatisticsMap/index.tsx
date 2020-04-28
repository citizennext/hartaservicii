import React, { useState } from 'react';
import { districtSvgMapping } from './DistrictMapping';
import { countBy, identity, pipe, map, objOf, toPairs, apply, keys, values, difference, reverse } from 'ramda';

type Props = {
  sqSizeWidth: number;
  sqSizeHeight: number;
  classStatisticsMap: string;
  title: string;
  mapColor: string;
  districtHueAndSaturation: string;
  districtLightness: number;
  data: {
    aggregate: {
      count: number;
    };
    nodes: {
      district: string;
    }[];
  };
  total: number;
};
interface Tooltip {
  X: number;
  Y: number;
  name: string;
  count: number;
}
function StatisticsMap(props: Props) {
  const [tooltip, setToolTip] = useState<Tooltip>();
  const getToolTip = (e: any, key: any, value: number) => {
    if (e && key && value) {
      setToolTip({ X: e.nativeEvent.offsetX, Y: e.nativeEvent.offsetY, name: key, count: value });
    } else {
      setToolTip({ X: 0, Y: 0, name: '', count: 0 });
    }
  };
  // Width of the enclosing square
  const sqSizeWidth = props.sqSizeWidth;
  // Height of the enclosing square
  const sqSizeHeight = props.sqSizeHeight;
  // Enclose circle in a circumscribing square
  const viewBox = `0 0 ${sqSizeWidth} ${sqSizeHeight}`;
  // Map background color in hex
  const mapColor = props.mapColor;
  // Current color lightness
  const currentLightness = props.districtLightness;
  interface District {
    district: string;
  }
  function manipulateData(array: District[]) {
    const startArray: string[] = array.map((a) => a.district);
    // @ts-ignore
    const startObject = countBy(identity)(startArray);
    // @ts-ignore
    const toIndividualKeys = pipe(toPairs, map(apply(objOf)));
    return toIndividualKeys(startObject);
  }
  const dataArray = manipulateData(props.data.nodes);
  const missingDistricts = difference(
    keys(districtSvgMapping),
    dataArray.map((obj: { [key: string]: number }) => keys(obj)[0])
  );
  // @ts-ignore
  const districtsArray = reverse([...dataArray, ...missingDistricts.map((a: string) => objOf(a, 0))]);
  const districtAmounts = dataArray.map((obj: { [key: string]: number }) => values(obj)[0]);
  const maxAmount = Math.max(...districtAmounts);
  const minAmount = 0;
  function lightness(amount: number) {
    return 100 - (amount / maxAmount) * currentLightness;
  }

  return (
    <div className={props.classStatisticsMap}>
      <svg width={sqSizeWidth} height={sqSizeHeight} viewBox={viewBox}>
        <path
          d="M358.88 158.32L358.64 157.93C357.111 155.226 354.684 153.143 351.78 152.04C350.378 151.571 348.908 151.334 347.43 151.34C346.035 151.348 344.646 151.516 343.29 151.84C337.13 153.26 331.07 157.45 327.85 159.96C327.442 159.835 327.046 159.671 326.67 159.47L325.98 159.14C325.58 158.975 325.152 158.89 324.72 158.89C324.496 158.894 324.272 158.911 324.05 158.94L322.81 159.08V160.33C322.854 161.27 322.609 162.202 322.11 163C321.788 163.397 321.376 163.712 320.908 163.919C320.441 164.126 319.931 164.219 319.42 164.19H319C317.89 163.75 316.75 163.35 315.62 162.95C313.492 162.269 311.419 161.427 309.42 160.43C306.755 159.115 304.664 156.871 303.54 154.12L303.28 153.5L303.42 153.35L303.04 152.9L302.8 152.31L302.65 152.44L302.58 152.37C301.93 151.6 301.31 150.81 300.7 150.03C299.377 148.209 297.866 146.533 296.19 145.03C296.562 144.747 296.953 144.49 297.36 144.26C297.62 144.11 297.87 143.96 298.09 143.81C298.513 143.578 298.886 143.266 299.188 142.89C299.49 142.514 299.715 142.083 299.85 141.62H301.11L299.66 139.41C297.28 135.78 296.98 131.81 296.89 128.36C296.89 127.75 296.89 127.13 296.89 126.52C296.975 123.186 296.591 119.857 295.75 116.63L295.94 116.32C296.376 115.609 296.633 114.802 296.69 113.97C296.715 113.509 296.638 113.048 296.465 112.619C296.292 112.191 296.028 111.805 295.69 111.49C297.558 108.855 299.046 105.97 300.11 102.92C301.32 99.05 301.11 95.72 299.38 92.72C301.15 87.06 298.38 80.34 294.75 76.07C295.248 74.4964 295.314 72.8177 294.94 71.21C294.546 69.9756 293.737 68.9155 292.65 68.21C291.956 67.7293 291.231 67.2951 290.48 66.91C288.798 66.0863 287.269 64.9803 285.96 63.64C283.6 61.04 282.27 58.22 280.87 54.51L280.67 53.98L280.16 53.73C278.352 52.8424 276.895 51.3741 276.02 49.56C275.317 48.0542 274.742 46.4921 274.3 44.89L273.74 43.11L273.08 42.87C271.52 42.3 270.51 40.96 269.47 39.44C268.31 37.75 267.21 36.18 265.69 35.38L265.31 34.47C264.49 32.47 263.7 30.47 262.91 28.41C258.82 17.84 254.6 6.91002 244.85 0.900017L244.32 0.580017L243.73 0.740017C242.489 1.03081 241.229 1.23794 239.96 1.36002C239.38 1.43002 238.8 1.50002 238.24 1.59002C236.187 1.78541 234.232 2.56636 232.61 3.84002C232.039 3.68707 231.451 3.60644 230.86 3.60001C229.803 3.60427 228.777 3.95563 227.94 4.60001C226.699 5.65893 225.7 6.97183 225.01 8.45001C224.76 8.92001 224.52 9.40002 224.27 9.90002C223.09 12.26 221.86 14.71 219.67 15.9L219.37 16.06H219.23C218.8 16.06 218.37 16 217.93 16H217.72C214.519 16.2316 211.366 16.9046 208.35 18C207.41 18.3 206.45 18.6 205.47 18.88C204.196 18.3835 202.838 18.1357 201.47 18.15C200.053 18.1762 198.642 18.3471 197.26 18.66L195.63 19.02C193.668 19.5405 191.657 19.8556 189.63 19.96H189L188.61 20.27C187.068 21.6385 185.722 23.2133 184.61 24.95C184.33 25.37 184.04 25.78 183.74 26.2C182.566 28.1042 180.814 29.583 178.74 30.42L178.04 30.66H177.32H176.48C176.143 30.6567 175.807 30.6131 175.48 30.53C173.55 27.53 170.88 25.26 168.05 22.86C166.159 21.2986 164.359 19.6291 162.66 17.86L162.36 17.54L161.93 17.44C161.424 17.3293 160.908 17.2757 160.39 17.28C158.265 17.4248 156.176 17.9041 154.2 18.7L152.58 19.23C151.464 19.6336 150.295 19.8695 149.11 19.93C148.877 19.9446 148.643 19.9446 148.41 19.93C147.771 19.8159 147.164 19.568 146.628 19.2027C146.092 18.8373 145.64 18.3627 145.3 17.81L145.2 17.66L145.05 17.54C144.298 16.8761 143.323 16.5191 142.32 16.54C141.473 16.574 140.633 16.7117 139.82 16.95L139.59 17.01C138.898 17.2207 138.189 17.368 137.47 17.45H137.09C136.551 17.4608 136.019 17.326 135.55 17.06C135.011 16.491 134.361 16.038 133.64 15.7285C132.92 15.419 132.144 15.2596 131.36 15.26L130.04 15.16C129.56 15.16 129.04 15.1 128.57 15.05L127.51 14.94L126.94 14.79L126.75 14.69H126.46C122.77 14.51 119.39 12.77 116.46 9.51002L116.06 9.07001H115.46C114.96 9.0649 114.469 8.93789 114.03 8.70001L113.25 8.23002L112.49 8.75002C111.2 9.64002 109.82 10.48 108.49 11.3C103.92 14.1 99.2 16.99 97.03 22.05C94.63 22.29 93.03 23.77 91.28 25.32L90.82 25.74C90.6476 25.7885 90.4691 25.812 90.29 25.81C89.7478 25.7837 89.2183 25.6368 88.74 25.38L88 24.8C87.55 24.57 87.14 24.37 86.75 24.2L85.75 23.8L85.07 24.6C84.4549 25.2994 83.6889 25.8499 82.83 26.21C82.1 26.54 81.32 26.82 80.56 27.09C80 27.29 79.45 27.48 78.92 27.69C77.5802 28.1453 76.3624 28.9013 75.36 29.9C74.9009 30.4224 74.5504 31.031 74.3289 31.6903C74.1074 32.3496 74.0194 33.0464 74.07 33.74C72.8817 34.0685 71.7865 34.6699 70.8716 35.4962C69.9567 36.3226 69.2473 37.3512 68.8 38.5C67.8431 40.763 67.3435 43.193 67.33 45.65C65.2038 46.8394 63.3801 48.5024 62 50.51C61.2872 51.4265 60.5261 52.3044 59.72 53.14L59.21 53.66L59.33 54.38C59.485 56.2641 59.0178 58.147 58 59.74C56.9877 61.5141 55.6271 63.0652 54 64.3L53.48 64.7V65.36C53.31 68.36 51.61 70.65 49.97 72.9L49.31 73.81C47.37 76.55 45.72 79.35 46.64 83.4C45.2641 83.5926 43.9505 84.0973 42.7996 84.8755C41.6488 85.6537 40.6911 86.6848 40 87.89C39.1787 89.1216 38.6237 90.5112 38.3706 91.9698C38.1175 93.4283 38.1717 94.9237 38.53 96.36C38.5164 96.8216 38.3552 97.2667 38.07 97.63C37.7404 98.0084 37.3257 98.3032 36.86 98.49C36.1588 98.7846 35.4325 99.0155 34.69 99.18L33.94 99.37L32.94 99.65V100.71C32.9178 101.574 32.6917 102.42 32.28 103.18C31.9033 103.809 31.4927 104.416 31.05 105L30.47 105.88L30.04 106.04C29.55 106.23 28.94 106.47 28.12 106.71C26.5798 105.806 24.9155 105.132 23.18 104.71C22.5791 104.576 21.9657 104.505 21.35 104.5C20.1234 104.471 18.9226 104.855 17.94 105.59L17.57 105.88L17.43 106.34C17.1692 107.162 17.0311 108.018 17.02 108.88V109.21C15.8785 109.634 14.7802 110.167 13.74 110.8C11.7001 109.684 9.39252 109.152 7.07 109.26C5.71 109.26 4.32 109.37 3.01 109.5L2.45 109.55L2.1 110C1.76 110.38 1.38 110.79 0.849999 111.35L0.519999 111.71V112.2C0.318071 113.678 0.486505 115.182 1.01016 116.579C1.53381 117.975 2.39627 119.22 3.52 120.2C4.43 121.11 5.52 122.01 6.73 122.97C8.35686 124.244 9.91568 125.603 11.4 127.04C12.0051 127.749 12.4945 128.549 12.85 129.41L13.07 129.84C13.29 130.3 13.49 130.71 13.66 131.03C13.7607 131.216 13.8709 131.396 13.99 131.57L14.19 131.85L14.46 132.01C17.46 133.87 18.84 136.63 18.57 140.43C18.4425 141.918 18.2254 143.398 17.92 144.86C17.5867 146.351 17.4058 147.872 17.38 149.4V149.89L17.69 150.26C20.4552 153.65 23.7471 156.574 27.44 158.92L27.76 159.12H28.13C30.84 159.23 32.92 160.61 34.83 162.02L35.25 162.34C37.25 163.82 39.31 165.34 42.01 165.94C42.3147 167.051 42.8234 168.095 43.51 169.02C43.6024 169.443 43.6394 169.877 43.62 170.31V170.39C43.0491 171.114 42.3753 171.751 41.62 172.28L41.24 172.58C40.3994 173.205 39.6951 173.994 39.17 174.9L38.71 175.71L39.28 176.46C39.9603 177.246 40.7325 177.948 41.58 178.55C42.0327 178.833 42.4207 179.208 42.7188 179.651C43.0169 180.094 43.2183 180.594 43.31 181.12C43.1943 181.416 43.0573 181.704 42.9 181.98C42.5226 182.17 42.1023 182.26 41.68 182.24C41.39 182.24 41.12 182.24 40.86 182.24H40.42H39.88C39.5434 182.234 39.2074 182.271 38.88 182.35C38.4012 182.471 37.9694 182.732 37.64 183.1L37.38 183.38L37.28 183.74C37.28 183.93 37.18 184.16 37.15 184.41L37.09 184.86L37.31 185.26C37.9067 186.163 38.6195 186.983 39.43 187.7L39.9 188.14L40.54 188.09C40.85 188.09 41.16 188.04 41.47 188.04C42.7403 187.981 43.9976 188.317 45.07 189C45.6689 189.492 46.1452 190.117 46.461 190.825C46.7769 191.534 46.9238 192.305 46.89 193.08V194.08L47.82 194.41C49.7704 195.004 51.7846 195.363 53.82 195.48C54.55 195.55 55.29 195.63 56.04 195.73C58.52 196.04 61.29 196.68 62.97 198.91V199.04L62.78 199.55V199.76C62.7948 200.794 63.1818 201.788 63.87 202.56C64.3384 203.156 64.7189 203.816 65 204.52L65.16 204.97L65.56 205.23C66.0521 205.532 66.6228 205.682 67.2 205.66C67.3565 205.67 67.5135 205.67 67.67 205.66L68.62 205.57L68.9 204.66C70.33 200.03 74.27 197.14 78.09 194.35C78.72 193.89 79.35 193.43 79.95 192.97C80.1367 192.891 80.3373 192.85 80.54 192.85C80.6944 193.004 80.8257 193.179 80.93 193.37V193.42C81.78 195.51 83.93 196.87 85.93 198.19L86.56 198.6C87.5324 199.153 88.4019 199.871 89.13 200.72C89.4088 201.087 89.6116 201.506 89.7267 201.953C89.8417 202.399 89.8666 202.864 89.8 203.32C89.4922 203.597 89.1024 203.765 88.69 203.8H88.19C87.87 203.8 87.56 203.8 87.19 203.74C86.5232 203.181 85.7871 202.711 85 202.34C84.6448 202.191 84.265 202.11 83.88 202.1H83.62H83.49C83.0568 202.197 82.665 202.428 82.37 202.76L81.92 203.2V203.82C81.92 204.37 81.83 204.53 81.82 204.54C81.5981 204.793 81.3161 204.985 81 205.1L80.54 205.28C80.2425 205.396 79.952 205.53 79.67 205.68C79.4066 205.831 79.1809 206.039 79.01 206.29L78.36 207.04L78.83 207.91C83.66 216.91 90.44 223.91 98.44 228.11L98.82 228.31C98.9591 228.663 99.0009 229.047 98.9411 229.421C98.8813 229.796 98.7221 230.148 98.48 230.44C97.843 231.188 97.1215 231.859 96.33 232.44L95.84 232.84C94.7196 233.669 93.749 234.684 92.97 235.84C92.5719 236.503 92.3235 237.244 92.2423 238.013C92.1611 238.782 92.2491 239.559 92.5 240.29V240.4L92.55 240.5C93.0746 241.449 93.8187 242.258 94.72 242.86L95.21 243.4L95.51 243.53C95.9412 243.709 96.4033 243.8 96.87 243.8C97.255 243.792 97.6378 243.739 98.01 243.64C98.32 243.56 98.65 243.45 99.01 243.33C99.37 243.21 99.64 243.12 100.01 243.04C101.167 243.965 102.598 244.482 104.08 244.51C105.31 244.455 106.517 244.156 107.63 243.63L108.44 243.28C109.896 242.515 111.498 242.069 113.14 241.97C113.689 241.973 114.236 242.04 114.77 242.17C114.86 242.188 114.948 242.218 115.03 242.26L115.35 242.38C115.69 242.51 116.13 242.64 116.62 242.78C117.544 243.046 118.499 243.188 119.46 243.2H120.06C123.5 245.51 127.5 246.45 131.3 247.2L132.7 247.48C135.906 247.984 139.042 248.867 142.04 250.11L142.38 250.26L142.71 250.58C142.998 250.864 143.302 251.131 143.62 251.38L144.09 251.78L144.46 251.85C145.035 251.95 145.617 252 146.2 252C148.457 251.884 150.665 251.295 152.68 250.27L153.46 249.92C155.609 248.779 157.973 248.098 160.4 247.92C160.816 248.153 161.214 248.417 161.59 248.71C161.8 248.87 162.01 249.02 162.21 249.15C162.731 249.524 163.323 249.786 163.95 249.92L164.89 250.1L165.04 250.17C166.272 250.732 167.616 251.009 168.97 250.98C170.4 250.938 171.825 250.781 173.23 250.51H173.5C174.536 250.313 175.586 250.2 176.64 250.17C176.916 250.155 177.194 250.155 177.47 250.17C178.557 250.295 179.578 250.756 180.39 251.49L180.93 251.96L181.63 251.8C182.211 251.673 182.805 251.609 183.4 251.61C185.122 251.655 186.805 252.137 188.29 253.01L189.7 253.79C191.347 254.81 193.132 255.587 195 256.1L195.51 256.21L195.97 255.97C197.116 255.405 198.302 254.927 199.52 254.54L200.76 254.1C202.499 253.543 204.064 252.544 205.3 251.2H205.37C205.87 251.352 206.388 251.433 206.91 251.44C207.344 251.44 207.776 251.373 208.19 251.24C209.147 250.873 209.991 250.263 210.64 249.47C211.388 248.595 212.079 247.673 212.71 246.71C213.4 245.71 214.19 244.55 215.11 243.43L216.17 242.14C218.72 238.99 220.17 237.25 224.53 235.42C225.019 235.192 225.49 234.928 225.94 234.63C226.52 234.28 227.21 233.86 227.94 233.44C229.059 232.763 230.282 232.276 231.56 232H231.63V232.07H232.57C233.619 232.227 234.679 232.304 235.74 232.3C239.915 232.155 244.027 231.239 247.87 229.6L250.87 228.43C254.582 226.769 258.48 225.561 262.48 224.83C263.21 225.15 263.89 225.5 264.57 225.83L266.05 226.57L266.17 226.62L267.04 227.79C268.322 229.416 269.952 230.732 271.811 231.643C273.67 232.553 275.71 233.034 277.78 233.05C279.147 233.055 280.503 232.808 281.78 232.32C282.26 233.339 283.026 234.195 283.985 234.785C284.944 235.374 286.055 235.672 287.18 235.64H287.4C289.516 235.618 291.552 234.821 293.12 233.4C293.586 234.267 293.965 235.178 294.25 236.12C294.48 236.79 294.71 237.48 294.99 238.12C295.83 240.12 297.15 242.55 299.99 243.62L300.19 243.7H300.8C301.083 243.718 301.367 243.718 301.65 243.7H301.87C302.036 243.689 302.203 243.689 302.37 243.7C302.511 243.693 302.652 243.72 302.78 243.78C306.08 245.25 311.02 247.01 315.78 247.01C317.438 247.035 319.088 246.778 320.66 246.25L321.3 246.03L321.53 245.41C322.642 242.221 323.479 238.942 324.03 235.61C324.374 233.723 324.591 231.816 324.68 229.9C324.769 228.423 324.59 226.943 324.15 225.53C323.57 223.769 322.401 222.261 320.84 221.26C320.628 219.938 320.561 218.597 320.64 217.26C320.64 216.53 320.64 215.81 320.64 215.13C323.64 212.83 324.64 209.65 325.48 207.13L325.61 206.73C326.41 204.24 327.24 201.67 329.23 199.63L329.43 199.82L330.38 198.62C331.235 197.375 331.84 195.976 332.16 194.5C332.414 193.041 333.113 191.697 334.16 190.65C337.112 189.322 340.21 188.346 343.39 187.74C344.39 187.52 345.33 187.29 346.28 187.05C350.23 186.05 354.28 184.67 357.42 181.42L357.83 180.99V180.4C357.68 173.85 358.62 169.74 359.08 163.01L358.88 158.32Z"
          fill={mapColor}
          className="map"
        />

        {districtsArray.map((obj: { [key: string]: number }, index: number) => {
          const key = keys(obj)[0];
          const value = values(obj)[0];
          return (
            <path
              className={`${key}`}
              key={`map-${key}-${index}`}
              d={districtSvgMapping[key]}
              fill={`hsl(${props.districtHueAndSaturation}, ${lightness(value)}%)`}
              stroke={key === 'Ilfov' || key === 'Prahova' || key === 'Ialomița' ? '#CDE5C0' : ''}
              onMouseMove={(e) => getToolTip(e, key, value)}
              onMouseOut={(e) => getToolTip(e, '', 0)}
            />
          );
        })}
      </svg>

      <svg className="svg-gradient" width="263" height="32" viewBox="0 0 263 32">
        <path d="M262.68 1.91992H0.589844V30.2499H262.68V1.91992Z" fill="url(#paint0_linear)" />
        <path d="M262.68 30.25H0.600098" stroke="#968584" strokeWidth="3" strokeMiterlimit="10" />
        <path d="M262.68 1.91992H0.600098" stroke="#968584" strokeWidth="3" strokeMiterlimit="10" />
        <defs>
          <linearGradient id="paint0_linear" x1="0.589844" y1="16.0799" x2="262.68" y2="16.0799" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#6FBAB6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="progress-statistic-map">
        <span className="map-min-amount">{minAmount}</span>
        <span className="map-max-amount">{maxAmount}</span>
      </div>
      <p className="circle-total-amount text-center block mt-4">{props.total}</p>
      <p className="statistics-map-title pb-20">{props.title}</p>
      {tooltip?.name && (
        <div className="statistics-tooltip" style={{ position: 'absolute', top: tooltip.Y, left: tooltip.X }}>
          <span>{tooltip.name}</span>
          <span>{tooltip.count}</span>
        </div>
      )}
    </div>
  );
}

StatisticsMap.defaultProps = {
  sqSizeWidth: 360,
  sqSizeHeight: 257,
  mapColor: `#CDE5C0`,
  districtHueAndSaturation: `177, 35%`,
  districtLightness: 58,
  classStatisticsMap: '',
};

export default StatisticsMap;
