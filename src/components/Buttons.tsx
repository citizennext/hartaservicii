import React from 'react';
interface Props {
  action?: () => void;
  label?: string;
  count?: number;
  className?: string;
  children: JSX.Element | string;
}

// const Count = styled(Text)`
//   width: 70px;
//   background: ${(props: any) => props.theme.colors.background};
//   margin: 0px;
//   padding: 10px;
//   height: 50px;
//   border: 3px solid ${(props: any) => props.theme.colors.light};
//   border-radius: 25px 0 0 25px;
//   text-align: right;
// `;
// const Filter = styled(Text)`
//   width: 200px;
//   padding-left: 37px;
//   text-align: left;
// `;
// function FilterButton({ action, label, count }: Omit<Props, 'children'>) {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button variant="filter" onClick={action}>
//         <Count variant="button">{count}</Count>
//         <Filter variant="label">{label}</Filter>
//       </Button>
//     </ThemeProvider>
//   );
// }
// function AlternativeButton({ action, label = 'Detalii' }: Omit<Props, 'children' | 'count'>) {
//   return (
//     <Button variant="alternative" onClick={action} style={{}}>
//       <Triangle
//         size={8}
//         fill="black"
//         strokeWidth={1}
//         style={{
//           transform: 'rotate(90deg)',
//           margin: 'auto 10px',
//         }}
//       />
//       <Text variant="details">{label}</Text>
//     </Button>
//   );
// }
// function MoreButton({ action }: Pick<Props, 'action'>) {
//   return (
//     <IconButton variant="more" onClick={action}>
//       <ArrowRight size={29} strokeWidth={1.5} />
//     </IconButton>
//   );
// }
// function SocialButton({ action, label, children }: Omit<Props, 'count'>) {
//   return (
//     <Button variant="secondary" onClick={action}>
//       {children}
//       <Text variant="button">{label}</Text>
//       <ArrowRight size={30} strokeWidth={1.5} style={{ padding: 2 }} />
//     </Button>
//   );
// }
// function DetailsButton({ action, label = 'Detalii', ...rest }: Omit<Props, 'children' | 'count'>) {
//   return (
//     <Button variant="primary" onClick={action} {...rest}>
//       <Triangle
//         size={8}
//         fill="black"
//         strokeWidth={1}
//         style={{
//           transform: 'rotate(90deg)',
//           margin: 'auto 10px',
//         }}
//       />
//       <Text variant="details">{label}</Text>
//     </Button>
//   );
// }
// function MainButton({ action, label }: Omit<Props, 'children' | 'count'>) {
//   return (
//     <Button variant="secondary" onClick={action}>
//       <Text variant="button">{label}</Text>
//       <ArrowRight size={30} strokeWidth={1.5} style={{ padding: 2 }} />
//     </Button>
//   );
// }
function Button(props: Props) {
  return (
    <button
      {...props}
      className={`inline-block text-white text-center min-w-full md:min-w-1/2 leading-tight no-underline px-4 py-4 bg-celeste border-0 rounded-full text-lg font-medium hover:bg-leaf hover:text-black ${props.className}`}
    />
  );
}
export { Button };
// AlternativeButton, DetailsButton, FilterButton, MainButton, MoreButton, SocialButton
