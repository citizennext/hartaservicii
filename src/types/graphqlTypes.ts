export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  HASURA_DateTime: any;
  HASURA_RichTextAST: any;
  HASURA_Json: any;
  HASURA_uuid: any;
  HASURA_jsonb: any;
  HASURA_date: any;
  HASURA_timestamptz: any;
  HASURA_smallint: any;
  HASURA_Long: any;
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  birthtime?: Maybe<Scalars['Date']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  birthtime?: Maybe<Scalars['Date']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Url = 'url',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type GraphQlSource = Node & {
  __typename?: 'GraphQLSource';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
};

export type GraphQlSourceConnection = {
  __typename?: 'GraphQLSourceConnection';
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphQlSourceGroupConnection>;
};

export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceEdge = {
  __typename?: 'GraphQLSourceEdge';
  next?: Maybe<GraphQlSource>;
  node: GraphQlSource;
  previous?: Maybe<GraphQlSource>;
};

export enum GraphQlSourceFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  TypeName = 'typeName',
  FieldName = 'fieldName',
}

export type GraphQlSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};

export type GraphQlSourceGroupConnection = {
  __typename?: 'GraphQLSourceGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Hasura = {
  __typename?: 'HASURA';
  asset?: Maybe<Hasura_Asset>;
  assets: Array<Maybe<Hasura_Asset>>;
  assetsConnection: Hasura_AssetConnection;
  blog?: Maybe<Hasura_Blog>;
  blogs: Array<Maybe<Hasura_Blog>>;
  blogsConnection: Hasura_BlogConnection;
  categories: Array<Hasura_Categories>;
  categories_aggregate: Hasura_Categories_Aggregate;
  categories_by_pk?: Maybe<Hasura_Categories>;
  node?: Maybe<Hasura_Node>;
  page?: Maybe<Hasura_Page>;
  pages: Array<Maybe<Hasura_Page>>;
  pagesConnection: Hasura_PageConnection;
  providers: Array<Hasura_Providers>;
  providers_aggregate: Hasura_Providers_Aggregate;
  providers_by_pk?: Maybe<Hasura_Providers>;
  services: Array<Hasura_Services>;
  services_aggregate: Hasura_Services_Aggregate;
  services_by_pk?: Maybe<Hasura_Services>;
  supplier_type: Array<Hasura_Supplier_Type>;
  supplier_type_aggregate: Hasura_Supplier_Type_Aggregate;
  supplier_type_by_pk?: Maybe<Hasura_Supplier_Type>;
  suppliers: Array<Hasura_Suppliers>;
  suppliers_aggregate: Hasura_Suppliers_Aggregate;
  suppliers_by_pk?: Maybe<Hasura_Suppliers>;
  users: Array<Hasura_Users>;
  users_aggregate: Hasura_Users_Aggregate;
  users_by_pk?: Maybe<Hasura_Users>;
};

export type HasuraAssetArgs = {
  where: Hasura_AssetWhereUniqueInput;
};

export type HasuraAssetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Hasura_AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Hasura_AssetWhereInput>;
};

export type HasuraAssetsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Hasura_AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Hasura_AssetWhereInput>;
};

export type HasuraBlogArgs = {
  where: Hasura_BlogWhereUniqueInput;
};

export type HasuraBlogsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Hasura_BlogOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Hasura_BlogWhereInput>;
};

export type HasuraBlogsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Hasura_BlogOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Hasura_BlogWhereInput>;
};

export type HasuraCategoriesArgs = {
  distinct_on?: Maybe<Array<Hasura_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Categories_Order_By>>;
  where?: Maybe<Hasura_Categories_Bool_Exp>;
};

export type HasuraCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Hasura_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Categories_Order_By>>;
  where?: Maybe<Hasura_Categories_Bool_Exp>;
};

export type HasuraCategories_By_PkArgs = {
  id: Scalars['HASURA_uuid'];
};

export type HasuraNodeArgs = {
  id: Scalars['ID'];
};

export type HasuraPageArgs = {
  where: Hasura_PageWhereUniqueInput;
};

export type HasuraPagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Hasura_PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Hasura_PageWhereInput>;
};

export type HasuraPagesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Hasura_PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Hasura_PageWhereInput>;
};

export type HasuraProvidersArgs = {
  distinct_on?: Maybe<Array<Hasura_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Providers_Order_By>>;
  where?: Maybe<Hasura_Providers_Bool_Exp>;
};

export type HasuraProviders_AggregateArgs = {
  distinct_on?: Maybe<Array<Hasura_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Providers_Order_By>>;
  where?: Maybe<Hasura_Providers_Bool_Exp>;
};

export type HasuraProviders_By_PkArgs = {
  id: Scalars['HASURA_uuid'];
};

export type HasuraServicesArgs = {
  distinct_on?: Maybe<Array<Hasura_Services_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Services_Order_By>>;
  where?: Maybe<Hasura_Services_Bool_Exp>;
};

export type HasuraServices_AggregateArgs = {
  distinct_on?: Maybe<Array<Hasura_Services_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Services_Order_By>>;
  where?: Maybe<Hasura_Services_Bool_Exp>;
};

export type HasuraServices_By_PkArgs = {
  id: Scalars['HASURA_uuid'];
};

export type HasuraSupplier_TypeArgs = {
  distinct_on?: Maybe<Array<Hasura_Supplier_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Supplier_Type_Order_By>>;
  where?: Maybe<Hasura_Supplier_Type_Bool_Exp>;
};

export type HasuraSupplier_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Hasura_Supplier_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Supplier_Type_Order_By>>;
  where?: Maybe<Hasura_Supplier_Type_Bool_Exp>;
};

export type HasuraSupplier_Type_By_PkArgs = {
  id: Scalars['String'];
};

export type HasuraSuppliersArgs = {
  distinct_on?: Maybe<Array<Hasura_Suppliers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Suppliers_Order_By>>;
  where?: Maybe<Hasura_Suppliers_Bool_Exp>;
};

export type HasuraSuppliers_AggregateArgs = {
  distinct_on?: Maybe<Array<Hasura_Suppliers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Suppliers_Order_By>>;
  where?: Maybe<Hasura_Suppliers_Bool_Exp>;
};

export type HasuraSuppliers_By_PkArgs = {
  id: Scalars['HASURA_uuid'];
};

export type HasuraUsersArgs = {
  distinct_on?: Maybe<Array<Hasura_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Users_Order_By>>;
  where?: Maybe<Hasura_Users_Bool_Exp>;
};

export type HasuraUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Hasura_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Users_Order_By>>;
  where?: Maybe<Hasura_Users_Bool_Exp>;
};

export type HasuraUsers_By_PkArgs = {
  id: Scalars['String'];
};

export type Hasura_AggregateAsset = {
  __typename?: 'HASURA_AggregateAsset';
  count: Scalars['Int'];
};

export type Hasura_AggregateBlog = {
  __typename?: 'HASURA_AggregateBlog';
  count: Scalars['Int'];
};

export type Hasura_AggregatePage = {
  __typename?: 'HASURA_AggregatePage';
  count: Scalars['Int'];
};

export type Hasura_Asset = Hasura_Node & {
  __typename?: 'HASURA_Asset';
  createdAt: Scalars['HASURA_DateTime'];
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  imageBlog?: Maybe<Array<Hasura_Blog>>;
  imagePage?: Maybe<Array<Hasura_Page>>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  status: Hasura_Status;
  updatedAt: Scalars['HASURA_DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Float']>;
  urlSharp?: Maybe<File>;
};

export type Hasura_AssetImageBlogArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Hasura_BlogOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Hasura_BlogWhereInput>;
};

export type Hasura_AssetImagePageArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Hasura_PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Hasura_PageWhereInput>;
};

export type Hasura_AssetUrlArgs = {
  transformation?: Maybe<Hasura_AssetTransformationInput>;
};

export type Hasura_AssetConnection = {
  __typename?: 'HASURA_AssetConnection';
  aggregate: Hasura_AggregateAsset;
  edges: Array<Maybe<Hasura_AssetEdge>>;
  pageInfo: Hasura_PageInfo;
};

export type Hasura_AssetCreateInput = {
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  imageBlog?: Maybe<Hasura_BlogCreateManyWithoutImageInput>;
  imagePage?: Maybe<Hasura_PageCreateManyWithoutImageInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  status?: Maybe<Hasura_Status>;
  width?: Maybe<Scalars['Float']>;
};

export type Hasura_AssetCreateOneWithoutImageBlogInput = {
  connect?: Maybe<Hasura_AssetWhereUniqueInput>;
  create?: Maybe<Hasura_AssetCreateWithoutImageBlogInput>;
  upload?: Maybe<Hasura_AssetUploadWithoutImageBlogInput>;
};

export type Hasura_AssetCreateOneWithoutImagePageInput = {
  connect?: Maybe<Hasura_AssetWhereUniqueInput>;
  create?: Maybe<Hasura_AssetCreateWithoutImagePageInput>;
  upload?: Maybe<Hasura_AssetUploadWithoutImagePageInput>;
};

export type Hasura_AssetCreateWithoutImageBlogInput = {
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  imagePage?: Maybe<Hasura_PageCreateManyWithoutImageInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  status?: Maybe<Hasura_Status>;
  width?: Maybe<Scalars['Float']>;
};

export type Hasura_AssetCreateWithoutImagePageInput = {
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  imageBlog?: Maybe<Hasura_BlogCreateManyWithoutImageInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  status?: Maybe<Hasura_Status>;
  width?: Maybe<Scalars['Float']>;
};

export type Hasura_AssetEdge = {
  __typename?: 'HASURA_AssetEdge';
  cursor: Scalars['String'];
  node: Hasura_Asset;
};

export enum Hasura_AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

export type Hasura_AssetPreviousValues = {
  __typename?: 'HASURA_AssetPreviousValues';
  createdAt: Scalars['HASURA_DateTime'];
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  status: Hasura_Status;
  updatedAt: Scalars['HASURA_DateTime'];
  width?: Maybe<Scalars['Float']>;
};

export type Hasura_AssetSubscriptionPayload = {
  __typename?: 'HASURA_AssetSubscriptionPayload';
  mutation: Hasura_MutationType;
  node?: Maybe<Hasura_Asset>;
  previousValues?: Maybe<Hasura_AssetPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type Hasura_AssetSubscriptionWhereInput = {
  AND?: Maybe<Array<Hasura_AssetSubscriptionWhereInput>>;
  NOT?: Maybe<Array<Hasura_AssetSubscriptionWhereInput>>;
  OR?: Maybe<Array<Hasura_AssetSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<Hasura_MutationType>>;
  node?: Maybe<Hasura_AssetWhereInput>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type Hasura_AssetTransformationInput = {
  document?: Maybe<Hasura_DocumentTransformationInput>;
  image?: Maybe<Hasura_ImageTransformationInput>;
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type Hasura_AssetUpdateInput = {
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  imageBlog?: Maybe<Hasura_BlogUpdateManyWithoutImageInput>;
  imagePage?: Maybe<Hasura_PageUpdateManyWithoutImageInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  status?: Maybe<Hasura_Status>;
  width?: Maybe<Scalars['Float']>;
};

export type Hasura_AssetUpdateManyMutationInput = {
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  status?: Maybe<Hasura_Status>;
  width?: Maybe<Scalars['Float']>;
};

export type Hasura_AssetUpdateOneWithoutImageBlogInput = {
  connect?: Maybe<Hasura_AssetWhereUniqueInput>;
  create?: Maybe<Hasura_AssetCreateWithoutImageBlogInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Hasura_AssetUpdateWithoutImageBlogDataInput>;
  upsert?: Maybe<Hasura_AssetUpsertWithoutImageBlogInput>;
};

export type Hasura_AssetUpdateOneWithoutImagePageInput = {
  connect?: Maybe<Hasura_AssetWhereUniqueInput>;
  create?: Maybe<Hasura_AssetCreateWithoutImagePageInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Hasura_AssetUpdateWithoutImagePageDataInput>;
  upsert?: Maybe<Hasura_AssetUpsertWithoutImagePageInput>;
};

export type Hasura_AssetUpdateWithoutImageBlogDataInput = {
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  imagePage?: Maybe<Hasura_PageUpdateManyWithoutImageInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  status?: Maybe<Hasura_Status>;
  width?: Maybe<Scalars['Float']>;
};

export type Hasura_AssetUpdateWithoutImagePageDataInput = {
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  imageBlog?: Maybe<Hasura_BlogUpdateManyWithoutImageInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  status?: Maybe<Hasura_Status>;
  width?: Maybe<Scalars['Float']>;
};

export type Hasura_AssetUploadInput = {
  imageBlog?: Maybe<Hasura_BlogCreateManyWithoutImageInput>;
  imagePage?: Maybe<Hasura_PageCreateManyWithoutImageInput>;
  status?: Maybe<Hasura_Status>;
  url: Scalars['String'];
};

export type Hasura_AssetUploadWithoutImageBlogInput = {
  imagePage?: Maybe<Hasura_PageCreateManyWithoutImageInput>;
  status?: Maybe<Hasura_Status>;
  url: Scalars['String'];
};

export type Hasura_AssetUploadWithoutImagePageInput = {
  imageBlog?: Maybe<Hasura_BlogCreateManyWithoutImageInput>;
  status?: Maybe<Hasura_Status>;
  url: Scalars['String'];
};

export type Hasura_AssetUpsertWithoutImageBlogInput = {
  create: Hasura_AssetCreateWithoutImageBlogInput;
  update: Hasura_AssetUpdateWithoutImageBlogDataInput;
};

export type Hasura_AssetUpsertWithoutImagePageInput = {
  create: Hasura_AssetCreateWithoutImagePageInput;
  update: Hasura_AssetUpdateWithoutImagePageDataInput;
};

export type Hasura_AssetWhereInput = {
  AND?: Maybe<Array<Hasura_AssetWhereInput>>;
  NOT?: Maybe<Array<Hasura_AssetWhereInput>>;
  OR?: Maybe<Array<Hasura_AssetWhereInput>>;
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_gt?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_gte?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  createdAt_lt?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_lte?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_not?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  fileName?: Maybe<Scalars['String']>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_ends_with?: Maybe<Scalars['String']>;
  fileName_gt?: Maybe<Scalars['String']>;
  fileName_gte?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Scalars['String']>>;
  fileName_lt?: Maybe<Scalars['String']>;
  fileName_lte?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  fileName_starts_with?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  handle_contains?: Maybe<Scalars['String']>;
  handle_ends_with?: Maybe<Scalars['String']>;
  handle_gt?: Maybe<Scalars['String']>;
  handle_gte?: Maybe<Scalars['String']>;
  handle_in?: Maybe<Array<Scalars['String']>>;
  handle_lt?: Maybe<Scalars['String']>;
  handle_lte?: Maybe<Scalars['String']>;
  handle_not?: Maybe<Scalars['String']>;
  handle_not_contains?: Maybe<Scalars['String']>;
  handle_not_ends_with?: Maybe<Scalars['String']>;
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  handle_not_starts_with?: Maybe<Scalars['String']>;
  handle_starts_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  height_gt?: Maybe<Scalars['Float']>;
  height_gte?: Maybe<Scalars['Float']>;
  height_in?: Maybe<Array<Scalars['Float']>>;
  height_lt?: Maybe<Scalars['Float']>;
  height_lte?: Maybe<Scalars['Float']>;
  height_not?: Maybe<Scalars['Float']>;
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  imageBlog_every?: Maybe<Hasura_BlogWhereInput>;
  imageBlog_none?: Maybe<Hasura_BlogWhereInput>;
  imageBlog_some?: Maybe<Hasura_BlogWhereInput>;
  imagePage_every?: Maybe<Hasura_PageWhereInput>;
  imagePage_none?: Maybe<Hasura_PageWhereInput>;
  imagePage_some?: Maybe<Hasura_PageWhereInput>;
  mimeType?: Maybe<Scalars['String']>;
  mimeType_contains?: Maybe<Scalars['String']>;
  mimeType_ends_with?: Maybe<Scalars['String']>;
  mimeType_gt?: Maybe<Scalars['String']>;
  mimeType_gte?: Maybe<Scalars['String']>;
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  mimeType_lt?: Maybe<Scalars['String']>;
  mimeType_lte?: Maybe<Scalars['String']>;
  mimeType_not?: Maybe<Scalars['String']>;
  mimeType_not_contains?: Maybe<Scalars['String']>;
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  mimeType_starts_with?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  size_gt?: Maybe<Scalars['Float']>;
  size_gte?: Maybe<Scalars['Float']>;
  size_in?: Maybe<Array<Scalars['Float']>>;
  size_lt?: Maybe<Scalars['Float']>;
  size_lte?: Maybe<Scalars['Float']>;
  size_not?: Maybe<Scalars['Float']>;
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  status?: Maybe<Hasura_Status>;
  status_in?: Maybe<Array<Hasura_Status>>;
  status_not?: Maybe<Hasura_Status>;
  status_not_in?: Maybe<Array<Hasura_Status>>;
  updatedAt?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_gt?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_gte?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_lte?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_not?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  width?: Maybe<Scalars['Float']>;
  width_gt?: Maybe<Scalars['Float']>;
  width_gte?: Maybe<Scalars['Float']>;
  width_in?: Maybe<Array<Scalars['Float']>>;
  width_lt?: Maybe<Scalars['Float']>;
  width_lte?: Maybe<Scalars['Float']>;
  width_not?: Maybe<Scalars['Float']>;
  width_not_in?: Maybe<Array<Scalars['Float']>>;
};

export type Hasura_AssetWhereUniqueInput = {
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type Hasura_BatchPayload = {
  __typename?: 'HASURA_BatchPayload';
  count: Scalars['HASURA_Long'];
};

export type Hasura_Blog = Hasura_Node & {
  __typename?: 'HASURA_Blog';
  content?: Maybe<Hasura_RichText>;
  createdAt: Scalars['HASURA_DateTime'];
  featured?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  image?: Maybe<Hasura_Asset>;
  publishedAt?: Maybe<Scalars['HASURA_DateTime']>;
  slug: Scalars['String'];
  status: Hasura_Status;
  summary: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['HASURA_DateTime'];
};

export type Hasura_BlogConnection = {
  __typename?: 'HASURA_BlogConnection';
  aggregate: Hasura_AggregateBlog;
  edges: Array<Maybe<Hasura_BlogEdge>>;
  pageInfo: Hasura_PageInfo;
};

export type Hasura_BlogCreateInput = {
  content?: Maybe<Scalars['HASURA_RichTextAST']>;
  featured?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Hasura_AssetCreateOneWithoutImageBlogInput>;
  publishedAt?: Maybe<Scalars['HASURA_DateTime']>;
  slug: Scalars['String'];
  status?: Maybe<Hasura_Status>;
  summary: Scalars['String'];
  title: Scalars['String'];
};

export type Hasura_BlogCreateManyWithoutImageInput = {
  connect?: Maybe<Array<Hasura_BlogWhereUniqueInput>>;
  create?: Maybe<Array<Hasura_BlogCreateWithoutImageInput>>;
};

export type Hasura_BlogCreateWithoutImageInput = {
  content?: Maybe<Scalars['HASURA_RichTextAST']>;
  featured?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['HASURA_DateTime']>;
  slug: Scalars['String'];
  status?: Maybe<Hasura_Status>;
  summary: Scalars['String'];
  title: Scalars['String'];
};

export type Hasura_BlogEdge = {
  __typename?: 'HASURA_BlogEdge';
  cursor: Scalars['String'];
  node: Hasura_Blog;
};

export enum Hasura_BlogOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  SummaryAsc = 'summary_ASC',
  SummaryDesc = 'summary_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type Hasura_BlogPreviousValues = {
  __typename?: 'HASURA_BlogPreviousValues';
  content?: Maybe<Hasura_RichText>;
  createdAt: Scalars['HASURA_DateTime'];
  featured?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  publishedAt?: Maybe<Scalars['HASURA_DateTime']>;
  slug: Scalars['String'];
  status: Hasura_Status;
  summary: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['HASURA_DateTime'];
};

export type Hasura_BlogScalarWhereInput = {
  AND?: Maybe<Array<Hasura_BlogScalarWhereInput>>;
  NOT?: Maybe<Array<Hasura_BlogScalarWhereInput>>;
  OR?: Maybe<Array<Hasura_BlogScalarWhereInput>>;
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_gt?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_gte?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  createdAt_lt?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_lte?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_not?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  featured?: Maybe<Scalars['Boolean']>;
  featured_not?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['HASURA_DateTime']>;
  publishedAt_gt?: Maybe<Scalars['HASURA_DateTime']>;
  publishedAt_gte?: Maybe<Scalars['HASURA_DateTime']>;
  publishedAt_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  publishedAt_lt?: Maybe<Scalars['HASURA_DateTime']>;
  publishedAt_lte?: Maybe<Scalars['HASURA_DateTime']>;
  publishedAt_not?: Maybe<Scalars['HASURA_DateTime']>;
  publishedAt_not_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_gt?: Maybe<Scalars['String']>;
  slug_gte?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Scalars['String']>>;
  slug_lt?: Maybe<Scalars['String']>;
  slug_lte?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  status?: Maybe<Hasura_Status>;
  status_in?: Maybe<Array<Hasura_Status>>;
  status_not?: Maybe<Hasura_Status>;
  status_not_in?: Maybe<Array<Hasura_Status>>;
  summary?: Maybe<Scalars['String']>;
  summary_contains?: Maybe<Scalars['String']>;
  summary_ends_with?: Maybe<Scalars['String']>;
  summary_gt?: Maybe<Scalars['String']>;
  summary_gte?: Maybe<Scalars['String']>;
  summary_in?: Maybe<Array<Scalars['String']>>;
  summary_lt?: Maybe<Scalars['String']>;
  summary_lte?: Maybe<Scalars['String']>;
  summary_not?: Maybe<Scalars['String']>;
  summary_not_contains?: Maybe<Scalars['String']>;
  summary_not_ends_with?: Maybe<Scalars['String']>;
  summary_not_in?: Maybe<Array<Scalars['String']>>;
  summary_not_starts_with?: Maybe<Scalars['String']>;
  summary_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_gt?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_gte?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_lte?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_not?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
};

export type Hasura_BlogSubscriptionPayload = {
  __typename?: 'HASURA_BlogSubscriptionPayload';
  mutation: Hasura_MutationType;
  node?: Maybe<Hasura_Blog>;
  previousValues?: Maybe<Hasura_BlogPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type Hasura_BlogSubscriptionWhereInput = {
  AND?: Maybe<Array<Hasura_BlogSubscriptionWhereInput>>;
  NOT?: Maybe<Array<Hasura_BlogSubscriptionWhereInput>>;
  OR?: Maybe<Array<Hasura_BlogSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<Hasura_MutationType>>;
  node?: Maybe<Hasura_BlogWhereInput>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type Hasura_BlogUpdateInput = {
  content?: Maybe<Scalars['HASURA_RichTextAST']>;
  featured?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Hasura_AssetUpdateOneWithoutImageBlogInput>;
  publishedAt?: Maybe<Scalars['HASURA_DateTime']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Hasura_Status>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Hasura_BlogUpdateManyDataInput = {
  content?: Maybe<Scalars['HASURA_RichTextAST']>;
  featured?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['HASURA_DateTime']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Hasura_Status>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Hasura_BlogUpdateManyMutationInput = {
  content?: Maybe<Scalars['HASURA_RichTextAST']>;
  featured?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['HASURA_DateTime']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Hasura_Status>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Hasura_BlogUpdateManyWithoutImageInput = {
  connect?: Maybe<Array<Hasura_BlogWhereUniqueInput>>;
  create?: Maybe<Array<Hasura_BlogCreateWithoutImageInput>>;
  delete?: Maybe<Array<Hasura_BlogWhereUniqueInput>>;
  deleteMany?: Maybe<Array<Hasura_BlogScalarWhereInput>>;
  disconnect?: Maybe<Array<Hasura_BlogWhereUniqueInput>>;
  set?: Maybe<Array<Hasura_BlogWhereUniqueInput>>;
  update?: Maybe<Array<Hasura_BlogUpdateWithWhereUniqueWithoutImageInput>>;
  updateMany?: Maybe<Array<Hasura_BlogUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<Hasura_BlogUpsertWithWhereUniqueWithoutImageInput>>;
};

export type Hasura_BlogUpdateManyWithWhereNestedInput = {
  data: Hasura_BlogUpdateManyDataInput;
  where: Hasura_BlogScalarWhereInput;
};

export type Hasura_BlogUpdateWithoutImageDataInput = {
  content?: Maybe<Scalars['HASURA_RichTextAST']>;
  featured?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['HASURA_DateTime']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Hasura_Status>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Hasura_BlogUpdateWithWhereUniqueWithoutImageInput = {
  data: Hasura_BlogUpdateWithoutImageDataInput;
  where: Hasura_BlogWhereUniqueInput;
};

export type Hasura_BlogUpsertWithWhereUniqueWithoutImageInput = {
  create: Hasura_BlogCreateWithoutImageInput;
  update: Hasura_BlogUpdateWithoutImageDataInput;
  where: Hasura_BlogWhereUniqueInput;
};

export type Hasura_BlogWhereInput = {
  AND?: Maybe<Array<Hasura_BlogWhereInput>>;
  NOT?: Maybe<Array<Hasura_BlogWhereInput>>;
  OR?: Maybe<Array<Hasura_BlogWhereInput>>;
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_gt?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_gte?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  createdAt_lt?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_lte?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_not?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  featured?: Maybe<Scalars['Boolean']>;
  featured_not?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  image?: Maybe<Hasura_AssetWhereInput>;
  publishedAt?: Maybe<Scalars['HASURA_DateTime']>;
  publishedAt_gt?: Maybe<Scalars['HASURA_DateTime']>;
  publishedAt_gte?: Maybe<Scalars['HASURA_DateTime']>;
  publishedAt_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  publishedAt_lt?: Maybe<Scalars['HASURA_DateTime']>;
  publishedAt_lte?: Maybe<Scalars['HASURA_DateTime']>;
  publishedAt_not?: Maybe<Scalars['HASURA_DateTime']>;
  publishedAt_not_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_gt?: Maybe<Scalars['String']>;
  slug_gte?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Scalars['String']>>;
  slug_lt?: Maybe<Scalars['String']>;
  slug_lte?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  status?: Maybe<Hasura_Status>;
  status_in?: Maybe<Array<Hasura_Status>>;
  status_not?: Maybe<Hasura_Status>;
  status_not_in?: Maybe<Array<Hasura_Status>>;
  summary?: Maybe<Scalars['String']>;
  summary_contains?: Maybe<Scalars['String']>;
  summary_ends_with?: Maybe<Scalars['String']>;
  summary_gt?: Maybe<Scalars['String']>;
  summary_gte?: Maybe<Scalars['String']>;
  summary_in?: Maybe<Array<Scalars['String']>>;
  summary_lt?: Maybe<Scalars['String']>;
  summary_lte?: Maybe<Scalars['String']>;
  summary_not?: Maybe<Scalars['String']>;
  summary_not_contains?: Maybe<Scalars['String']>;
  summary_not_ends_with?: Maybe<Scalars['String']>;
  summary_not_in?: Maybe<Array<Scalars['String']>>;
  summary_not_starts_with?: Maybe<Scalars['String']>;
  summary_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_gt?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_gte?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_lte?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_not?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
};

export type Hasura_BlogWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type Hasura_Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type Hasura_Categories = {
  __typename?: 'HASURA_categories';
  id: Scalars['HASURA_uuid'];
  name: Scalars['String'];
  services: Array<Hasura_Services>;
  services_aggregate: Hasura_Services_Aggregate;
};

export type Hasura_CategoriesServicesArgs = {
  distinct_on?: Maybe<Array<Hasura_Services_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Services_Order_By>>;
  where?: Maybe<Hasura_Services_Bool_Exp>;
};

export type Hasura_CategoriesServices_AggregateArgs = {
  distinct_on?: Maybe<Array<Hasura_Services_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Services_Order_By>>;
  where?: Maybe<Hasura_Services_Bool_Exp>;
};

export type Hasura_Categories_Aggregate = {
  __typename?: 'HASURA_categories_aggregate';
  aggregate?: Maybe<Hasura_Categories_Aggregate_Fields>;
  nodes: Array<Hasura_Categories>;
};

export type Hasura_Categories_Aggregate_Fields = {
  __typename?: 'HASURA_categories_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Hasura_Categories_Max_Fields>;
  min?: Maybe<Hasura_Categories_Min_Fields>;
};

export type Hasura_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Hasura_Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Hasura_Categories_Aggregate_Order_By = {
  count?: Maybe<Hasura_Order_By>;
  max?: Maybe<Hasura_Categories_Max_Order_By>;
  min?: Maybe<Hasura_Categories_Min_Order_By>;
};

export type Hasura_Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Hasura_Categories_Bool_Exp>>>;
  _not?: Maybe<Hasura_Categories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Hasura_Categories_Bool_Exp>>>;
  id?: Maybe<Hasura_Uuid_Comparison_Exp>;
  name?: Maybe<Hasura_String_Comparison_Exp>;
  services?: Maybe<Hasura_Services_Bool_Exp>;
};

export type Hasura_Categories_Max_Fields = {
  __typename?: 'HASURA_categories_max_fields';
  name?: Maybe<Scalars['String']>;
};

export type Hasura_Categories_Max_Order_By = {
  name?: Maybe<Hasura_Order_By>;
};

export type Hasura_Categories_Min_Fields = {
  __typename?: 'HASURA_categories_min_fields';
  name?: Maybe<Scalars['String']>;
};

export type Hasura_Categories_Min_Order_By = {
  name?: Maybe<Hasura_Order_By>;
};

export type Hasura_Categories_Order_By = {
  id?: Maybe<Hasura_Order_By>;
  name?: Maybe<Hasura_Order_By>;
  services_aggregate?: Maybe<Hasura_Services_Aggregate_Order_By>;
};

export enum Hasura_Categories_Select_Column {
  Id = 'id',
  Name = 'name',
}

export type Hasura_Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['HASURA_date']>;
  _gt?: Maybe<Scalars['HASURA_date']>;
  _gte?: Maybe<Scalars['HASURA_date']>;
  _in?: Maybe<Array<Scalars['HASURA_date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['HASURA_date']>;
  _lte?: Maybe<Scalars['HASURA_date']>;
  _neq?: Maybe<Scalars['HASURA_date']>;
  _nin?: Maybe<Array<Scalars['HASURA_date']>>;
};

export enum Hasura_DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx',
}

export type Hasura_DocumentOutputInput = {
  format?: Maybe<Hasura_DocumentFileTypes>;
};

export type Hasura_DocumentTransformationInput = {
  output?: Maybe<Hasura_DocumentOutputInput>;
};

export enum Hasura_ImageFit {
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale',
}

export type Hasura_ImageResizeInput = {
  fit?: Maybe<Hasura_ImageFit>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type Hasura_ImageTransformationInput = {
  resize?: Maybe<Hasura_ImageResizeInput>;
};

export type Hasura_Jsonb_Comparison_Exp = {
  _contained_in?: Maybe<Scalars['HASURA_jsonb']>;
  _contains?: Maybe<Scalars['HASURA_jsonb']>;
  _eq?: Maybe<Scalars['HASURA_jsonb']>;
  _gt?: Maybe<Scalars['HASURA_jsonb']>;
  _gte?: Maybe<Scalars['HASURA_jsonb']>;
  _has_key?: Maybe<Scalars['String']>;
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['HASURA_jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['HASURA_jsonb']>;
  _lte?: Maybe<Scalars['HASURA_jsonb']>;
  _neq?: Maybe<Scalars['HASURA_jsonb']>;
  _nin?: Maybe<Array<Scalars['HASURA_jsonb']>>;
};

export enum Hasura_Locale {
  En = 'EN',
}

export type Hasura_Mutation = {
  __typename?: 'HASURA_Mutation';
  createAsset: Hasura_Asset;
  createBlog: Hasura_Blog;
  createPage: Hasura_Page;
  deleteAsset?: Maybe<Hasura_Asset>;
  deleteBlog?: Maybe<Hasura_Blog>;
  deleteManyAssets: Hasura_BatchPayload;
  deleteManyBlogs: Hasura_BatchPayload;
  deleteManyPages: Hasura_BatchPayload;
  deletePage?: Maybe<Hasura_Page>;
  updateAsset?: Maybe<Hasura_Asset>;
  updateBlog?: Maybe<Hasura_Blog>;
  updateManyAssets: Hasura_BatchPayload;
  updateManyBlogs: Hasura_BatchPayload;
  updateManyPages: Hasura_BatchPayload;
  updatePage?: Maybe<Hasura_Page>;
  uploadAsset: Hasura_Asset;
  upsertAsset: Hasura_Asset;
  upsertBlog: Hasura_Blog;
  upsertPage: Hasura_Page;
};

export type Hasura_MutationCreateAssetArgs = {
  data: Hasura_AssetCreateInput;
};

export type Hasura_MutationCreateBlogArgs = {
  data: Hasura_BlogCreateInput;
};

export type Hasura_MutationCreatePageArgs = {
  data: Hasura_PageCreateInput;
};

export type Hasura_MutationDeleteAssetArgs = {
  where: Hasura_AssetWhereUniqueInput;
};

export type Hasura_MutationDeleteBlogArgs = {
  where: Hasura_BlogWhereUniqueInput;
};

export type Hasura_MutationDeleteManyAssetsArgs = {
  where?: Maybe<Hasura_AssetWhereInput>;
};

export type Hasura_MutationDeleteManyBlogsArgs = {
  where?: Maybe<Hasura_BlogWhereInput>;
};

export type Hasura_MutationDeleteManyPagesArgs = {
  where?: Maybe<Hasura_PageWhereInput>;
};

export type Hasura_MutationDeletePageArgs = {
  where: Hasura_PageWhereUniqueInput;
};

export type Hasura_MutationUpdateAssetArgs = {
  data: Hasura_AssetUpdateInput;
  where: Hasura_AssetWhereUniqueInput;
};

export type Hasura_MutationUpdateBlogArgs = {
  data: Hasura_BlogUpdateInput;
  where: Hasura_BlogWhereUniqueInput;
};

export type Hasura_MutationUpdateManyAssetsArgs = {
  data: Hasura_AssetUpdateManyMutationInput;
  where?: Maybe<Hasura_AssetWhereInput>;
};

export type Hasura_MutationUpdateManyBlogsArgs = {
  data: Hasura_BlogUpdateManyMutationInput;
  where?: Maybe<Hasura_BlogWhereInput>;
};

export type Hasura_MutationUpdateManyPagesArgs = {
  data: Hasura_PageUpdateManyMutationInput;
  where?: Maybe<Hasura_PageWhereInput>;
};

export type Hasura_MutationUpdatePageArgs = {
  data: Hasura_PageUpdateInput;
  where: Hasura_PageWhereUniqueInput;
};

export type Hasura_MutationUploadAssetArgs = {
  data: Hasura_AssetUploadInput;
};

export type Hasura_MutationUpsertAssetArgs = {
  create: Hasura_AssetCreateInput;
  update: Hasura_AssetUpdateInput;
  where: Hasura_AssetWhereUniqueInput;
};

export type Hasura_MutationUpsertBlogArgs = {
  create: Hasura_BlogCreateInput;
  update: Hasura_BlogUpdateInput;
  where: Hasura_BlogWhereUniqueInput;
};

export type Hasura_MutationUpsertPageArgs = {
  create: Hasura_PageCreateInput;
  update: Hasura_PageUpdateInput;
  where: Hasura_PageWhereUniqueInput;
};

export enum Hasura_MutationType {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Updated = 'UPDATED',
}

export type Hasura_Node = {
  id: Scalars['ID'];
};

export enum Hasura_Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last',
}

export type Hasura_Page = Hasura_Node & {
  __typename?: 'HASURA_Page';
  additionalData?: Maybe<Scalars['HASURA_Json']>;
  content?: Maybe<Hasura_RichText>;
  createdAt: Scalars['HASURA_DateTime'];
  header?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Hasura_Asset>;
  slug: Scalars['String'];
  status: Hasura_Status;
  summary: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['HASURA_DateTime'];
};

export type Hasura_PageConnection = {
  __typename?: 'HASURA_PageConnection';
  aggregate: Hasura_AggregatePage;
  edges: Array<Maybe<Hasura_PageEdge>>;
  pageInfo: Hasura_PageInfo;
};

export type Hasura_PageCreateInput = {
  additionalData?: Maybe<Scalars['HASURA_Json']>;
  content?: Maybe<Scalars['HASURA_RichTextAST']>;
  header?: Maybe<Scalars['String']>;
  image?: Maybe<Hasura_AssetCreateOneWithoutImagePageInput>;
  slug: Scalars['String'];
  status?: Maybe<Hasura_Status>;
  summary: Scalars['String'];
  title: Scalars['String'];
};

export type Hasura_PageCreateManyWithoutImageInput = {
  connect?: Maybe<Array<Hasura_PageWhereUniqueInput>>;
  create?: Maybe<Array<Hasura_PageCreateWithoutImageInput>>;
};

export type Hasura_PageCreateWithoutImageInput = {
  additionalData?: Maybe<Scalars['HASURA_Json']>;
  content?: Maybe<Scalars['HASURA_RichTextAST']>;
  header?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  status?: Maybe<Hasura_Status>;
  summary: Scalars['String'];
  title: Scalars['String'];
};

export type Hasura_PageEdge = {
  __typename?: 'HASURA_PageEdge';
  cursor: Scalars['String'];
  node: Hasura_Page;
};

export type Hasura_PageInfo = {
  __typename?: 'HASURA_PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export enum Hasura_PageOrderByInput {
  AdditionalDataAsc = 'additionalData_ASC',
  AdditionalDataDesc = 'additionalData_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  SummaryAsc = 'summary_ASC',
  SummaryDesc = 'summary_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type Hasura_PagePreviousValues = {
  __typename?: 'HASURA_PagePreviousValues';
  additionalData?: Maybe<Scalars['HASURA_Json']>;
  content?: Maybe<Hasura_RichText>;
  createdAt: Scalars['HASURA_DateTime'];
  header?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  slug: Scalars['String'];
  status: Hasura_Status;
  summary: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['HASURA_DateTime'];
};

export type Hasura_PageScalarWhereInput = {
  AND?: Maybe<Array<Hasura_PageScalarWhereInput>>;
  NOT?: Maybe<Array<Hasura_PageScalarWhereInput>>;
  OR?: Maybe<Array<Hasura_PageScalarWhereInput>>;
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_gt?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_gte?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  createdAt_lt?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_lte?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_not?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  header?: Maybe<Scalars['String']>;
  header_contains?: Maybe<Scalars['String']>;
  header_ends_with?: Maybe<Scalars['String']>;
  header_gt?: Maybe<Scalars['String']>;
  header_gte?: Maybe<Scalars['String']>;
  header_in?: Maybe<Array<Scalars['String']>>;
  header_lt?: Maybe<Scalars['String']>;
  header_lte?: Maybe<Scalars['String']>;
  header_not?: Maybe<Scalars['String']>;
  header_not_contains?: Maybe<Scalars['String']>;
  header_not_ends_with?: Maybe<Scalars['String']>;
  header_not_in?: Maybe<Array<Scalars['String']>>;
  header_not_starts_with?: Maybe<Scalars['String']>;
  header_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_gt?: Maybe<Scalars['String']>;
  slug_gte?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Scalars['String']>>;
  slug_lt?: Maybe<Scalars['String']>;
  slug_lte?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  status?: Maybe<Hasura_Status>;
  status_in?: Maybe<Array<Hasura_Status>>;
  status_not?: Maybe<Hasura_Status>;
  status_not_in?: Maybe<Array<Hasura_Status>>;
  summary?: Maybe<Scalars['String']>;
  summary_contains?: Maybe<Scalars['String']>;
  summary_ends_with?: Maybe<Scalars['String']>;
  summary_gt?: Maybe<Scalars['String']>;
  summary_gte?: Maybe<Scalars['String']>;
  summary_in?: Maybe<Array<Scalars['String']>>;
  summary_lt?: Maybe<Scalars['String']>;
  summary_lte?: Maybe<Scalars['String']>;
  summary_not?: Maybe<Scalars['String']>;
  summary_not_contains?: Maybe<Scalars['String']>;
  summary_not_ends_with?: Maybe<Scalars['String']>;
  summary_not_in?: Maybe<Array<Scalars['String']>>;
  summary_not_starts_with?: Maybe<Scalars['String']>;
  summary_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_gt?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_gte?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_lte?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_not?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
};

export type Hasura_PageSubscriptionPayload = {
  __typename?: 'HASURA_PageSubscriptionPayload';
  mutation: Hasura_MutationType;
  node?: Maybe<Hasura_Page>;
  previousValues?: Maybe<Hasura_PagePreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type Hasura_PageSubscriptionWhereInput = {
  AND?: Maybe<Array<Hasura_PageSubscriptionWhereInput>>;
  NOT?: Maybe<Array<Hasura_PageSubscriptionWhereInput>>;
  OR?: Maybe<Array<Hasura_PageSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<Hasura_MutationType>>;
  node?: Maybe<Hasura_PageWhereInput>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
};

export type Hasura_PageUpdateInput = {
  additionalData?: Maybe<Scalars['HASURA_Json']>;
  content?: Maybe<Scalars['HASURA_RichTextAST']>;
  header?: Maybe<Scalars['String']>;
  image?: Maybe<Hasura_AssetUpdateOneWithoutImagePageInput>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Hasura_Status>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Hasura_PageUpdateManyDataInput = {
  additionalData?: Maybe<Scalars['HASURA_Json']>;
  content?: Maybe<Scalars['HASURA_RichTextAST']>;
  header?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Hasura_Status>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Hasura_PageUpdateManyMutationInput = {
  additionalData?: Maybe<Scalars['HASURA_Json']>;
  content?: Maybe<Scalars['HASURA_RichTextAST']>;
  header?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Hasura_Status>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Hasura_PageUpdateManyWithoutImageInput = {
  connect?: Maybe<Array<Hasura_PageWhereUniqueInput>>;
  create?: Maybe<Array<Hasura_PageCreateWithoutImageInput>>;
  delete?: Maybe<Array<Hasura_PageWhereUniqueInput>>;
  deleteMany?: Maybe<Array<Hasura_PageScalarWhereInput>>;
  disconnect?: Maybe<Array<Hasura_PageWhereUniqueInput>>;
  set?: Maybe<Array<Hasura_PageWhereUniqueInput>>;
  update?: Maybe<Array<Hasura_PageUpdateWithWhereUniqueWithoutImageInput>>;
  updateMany?: Maybe<Array<Hasura_PageUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<Hasura_PageUpsertWithWhereUniqueWithoutImageInput>>;
};

export type Hasura_PageUpdateManyWithWhereNestedInput = {
  data: Hasura_PageUpdateManyDataInput;
  where: Hasura_PageScalarWhereInput;
};

export type Hasura_PageUpdateWithoutImageDataInput = {
  additionalData?: Maybe<Scalars['HASURA_Json']>;
  content?: Maybe<Scalars['HASURA_RichTextAST']>;
  header?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Hasura_Status>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Hasura_PageUpdateWithWhereUniqueWithoutImageInput = {
  data: Hasura_PageUpdateWithoutImageDataInput;
  where: Hasura_PageWhereUniqueInput;
};

export type Hasura_PageUpsertWithWhereUniqueWithoutImageInput = {
  create: Hasura_PageCreateWithoutImageInput;
  update: Hasura_PageUpdateWithoutImageDataInput;
  where: Hasura_PageWhereUniqueInput;
};

export type Hasura_PageWhereInput = {
  AND?: Maybe<Array<Hasura_PageWhereInput>>;
  NOT?: Maybe<Array<Hasura_PageWhereInput>>;
  OR?: Maybe<Array<Hasura_PageWhereInput>>;
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_gt?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_gte?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  createdAt_lt?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_lte?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_not?: Maybe<Scalars['HASURA_DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  header?: Maybe<Scalars['String']>;
  header_contains?: Maybe<Scalars['String']>;
  header_ends_with?: Maybe<Scalars['String']>;
  header_gt?: Maybe<Scalars['String']>;
  header_gte?: Maybe<Scalars['String']>;
  header_in?: Maybe<Array<Scalars['String']>>;
  header_lt?: Maybe<Scalars['String']>;
  header_lte?: Maybe<Scalars['String']>;
  header_not?: Maybe<Scalars['String']>;
  header_not_contains?: Maybe<Scalars['String']>;
  header_not_ends_with?: Maybe<Scalars['String']>;
  header_not_in?: Maybe<Array<Scalars['String']>>;
  header_not_starts_with?: Maybe<Scalars['String']>;
  header_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  image?: Maybe<Hasura_AssetWhereInput>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_gt?: Maybe<Scalars['String']>;
  slug_gte?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Scalars['String']>>;
  slug_lt?: Maybe<Scalars['String']>;
  slug_lte?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  status?: Maybe<Hasura_Status>;
  status_in?: Maybe<Array<Hasura_Status>>;
  status_not?: Maybe<Hasura_Status>;
  status_not_in?: Maybe<Array<Hasura_Status>>;
  summary?: Maybe<Scalars['String']>;
  summary_contains?: Maybe<Scalars['String']>;
  summary_ends_with?: Maybe<Scalars['String']>;
  summary_gt?: Maybe<Scalars['String']>;
  summary_gte?: Maybe<Scalars['String']>;
  summary_in?: Maybe<Array<Scalars['String']>>;
  summary_lt?: Maybe<Scalars['String']>;
  summary_lte?: Maybe<Scalars['String']>;
  summary_not?: Maybe<Scalars['String']>;
  summary_not_contains?: Maybe<Scalars['String']>;
  summary_not_ends_with?: Maybe<Scalars['String']>;
  summary_not_in?: Maybe<Array<Scalars['String']>>;
  summary_not_starts_with?: Maybe<Scalars['String']>;
  summary_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_gt?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_gte?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_lte?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_not?: Maybe<Scalars['HASURA_DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['HASURA_DateTime']>>;
};

export type Hasura_PageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Hasura_Providers = {
  __typename?: 'HASURA_providers';
  address: Scalars['String'];
  capacity?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Scalars['HASURA_jsonb']>;
  district: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['HASURA_uuid'];
  license_by?: Maybe<Scalars['String']>;
  license_date_5years?: Maybe<Scalars['HASURA_date']>;
  license_date_provisional: Scalars['HASURA_date'];
  license_no?: Maybe<Scalars['String']>;
  location: Scalars['String'];
  name: Scalars['String'];
  service: Hasura_Services;
  service_id: Scalars['HASURA_uuid'];
  supplier: Hasura_Suppliers;
  supplier_id: Scalars['HASURA_uuid'];
  type_id?: Maybe<Scalars['HASURA_smallint']>;
};

export type Hasura_ProvidersCoordinatesArgs = {
  path?: Maybe<Scalars['String']>;
};

export type Hasura_Providers_Aggregate = {
  __typename?: 'HASURA_providers_aggregate';
  aggregate?: Maybe<Hasura_Providers_Aggregate_Fields>;
  nodes: Array<Hasura_Providers>;
};

export type Hasura_Providers_Aggregate_Fields = {
  __typename?: 'HASURA_providers_aggregate_fields';
  avg?: Maybe<Hasura_Providers_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Hasura_Providers_Max_Fields>;
  min?: Maybe<Hasura_Providers_Min_Fields>;
  stddev?: Maybe<Hasura_Providers_Stddev_Fields>;
  stddev_pop?: Maybe<Hasura_Providers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hasura_Providers_Stddev_Samp_Fields>;
  sum?: Maybe<Hasura_Providers_Sum_Fields>;
  var_pop?: Maybe<Hasura_Providers_Var_Pop_Fields>;
  var_samp?: Maybe<Hasura_Providers_Var_Samp_Fields>;
  variance?: Maybe<Hasura_Providers_Variance_Fields>;
};

export type Hasura_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Hasura_Providers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Hasura_Providers_Aggregate_Order_By = {
  avg?: Maybe<Hasura_Providers_Avg_Order_By>;
  count?: Maybe<Hasura_Order_By>;
  max?: Maybe<Hasura_Providers_Max_Order_By>;
  min?: Maybe<Hasura_Providers_Min_Order_By>;
  stddev?: Maybe<Hasura_Providers_Stddev_Order_By>;
  stddev_pop?: Maybe<Hasura_Providers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Hasura_Providers_Stddev_Samp_Order_By>;
  sum?: Maybe<Hasura_Providers_Sum_Order_By>;
  var_pop?: Maybe<Hasura_Providers_Var_Pop_Order_By>;
  var_samp?: Maybe<Hasura_Providers_Var_Samp_Order_By>;
  variance?: Maybe<Hasura_Providers_Variance_Order_By>;
};

export type Hasura_Providers_Avg_Fields = {
  __typename?: 'HASURA_providers_avg_fields';
  type_id?: Maybe<Scalars['Float']>;
};

export type Hasura_Providers_Avg_Order_By = {
  type_id?: Maybe<Hasura_Order_By>;
};

export type Hasura_Providers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Hasura_Providers_Bool_Exp>>>;
  _not?: Maybe<Hasura_Providers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Hasura_Providers_Bool_Exp>>>;
  address?: Maybe<Hasura_String_Comparison_Exp>;
  capacity?: Maybe<Hasura_String_Comparison_Exp>;
  coordinates?: Maybe<Hasura_Jsonb_Comparison_Exp>;
  district?: Maybe<Hasura_String_Comparison_Exp>;
  email?: Maybe<Hasura_String_Comparison_Exp>;
  id?: Maybe<Hasura_Uuid_Comparison_Exp>;
  license_by?: Maybe<Hasura_String_Comparison_Exp>;
  license_date_5years?: Maybe<Hasura_Date_Comparison_Exp>;
  license_date_provisional?: Maybe<Hasura_Date_Comparison_Exp>;
  license_no?: Maybe<Hasura_String_Comparison_Exp>;
  location?: Maybe<Hasura_String_Comparison_Exp>;
  name?: Maybe<Hasura_String_Comparison_Exp>;
  service?: Maybe<Hasura_Services_Bool_Exp>;
  service_id?: Maybe<Hasura_Uuid_Comparison_Exp>;
  supplier?: Maybe<Hasura_Suppliers_Bool_Exp>;
  supplier_id?: Maybe<Hasura_Uuid_Comparison_Exp>;
  type_id?: Maybe<Hasura_Smallint_Comparison_Exp>;
};

export type Hasura_Providers_Max_Fields = {
  __typename?: 'HASURA_providers_max_fields';
  address?: Maybe<Scalars['String']>;
  capacity?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  license_by?: Maybe<Scalars['String']>;
  license_date_5years?: Maybe<Scalars['HASURA_date']>;
  license_date_provisional?: Maybe<Scalars['HASURA_date']>;
  license_no?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['HASURA_smallint']>;
};

export type Hasura_Providers_Max_Order_By = {
  address?: Maybe<Hasura_Order_By>;
  capacity?: Maybe<Hasura_Order_By>;
  district?: Maybe<Hasura_Order_By>;
  email?: Maybe<Hasura_Order_By>;
  license_by?: Maybe<Hasura_Order_By>;
  license_date_5years?: Maybe<Hasura_Order_By>;
  license_date_provisional?: Maybe<Hasura_Order_By>;
  license_no?: Maybe<Hasura_Order_By>;
  location?: Maybe<Hasura_Order_By>;
  name?: Maybe<Hasura_Order_By>;
  type_id?: Maybe<Hasura_Order_By>;
};

export type Hasura_Providers_Min_Fields = {
  __typename?: 'HASURA_providers_min_fields';
  address?: Maybe<Scalars['String']>;
  capacity?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  license_by?: Maybe<Scalars['String']>;
  license_date_5years?: Maybe<Scalars['HASURA_date']>;
  license_date_provisional?: Maybe<Scalars['HASURA_date']>;
  license_no?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['HASURA_smallint']>;
};

export type Hasura_Providers_Min_Order_By = {
  address?: Maybe<Hasura_Order_By>;
  capacity?: Maybe<Hasura_Order_By>;
  district?: Maybe<Hasura_Order_By>;
  email?: Maybe<Hasura_Order_By>;
  license_by?: Maybe<Hasura_Order_By>;
  license_date_5years?: Maybe<Hasura_Order_By>;
  license_date_provisional?: Maybe<Hasura_Order_By>;
  license_no?: Maybe<Hasura_Order_By>;
  location?: Maybe<Hasura_Order_By>;
  name?: Maybe<Hasura_Order_By>;
  type_id?: Maybe<Hasura_Order_By>;
};

export type Hasura_Providers_Order_By = {
  address?: Maybe<Hasura_Order_By>;
  capacity?: Maybe<Hasura_Order_By>;
  coordinates?: Maybe<Hasura_Order_By>;
  district?: Maybe<Hasura_Order_By>;
  email?: Maybe<Hasura_Order_By>;
  id?: Maybe<Hasura_Order_By>;
  license_by?: Maybe<Hasura_Order_By>;
  license_date_5years?: Maybe<Hasura_Order_By>;
  license_date_provisional?: Maybe<Hasura_Order_By>;
  license_no?: Maybe<Hasura_Order_By>;
  location?: Maybe<Hasura_Order_By>;
  name?: Maybe<Hasura_Order_By>;
  service?: Maybe<Hasura_Services_Order_By>;
  service_id?: Maybe<Hasura_Order_By>;
  supplier?: Maybe<Hasura_Suppliers_Order_By>;
  supplier_id?: Maybe<Hasura_Order_By>;
  type_id?: Maybe<Hasura_Order_By>;
};

export enum Hasura_Providers_Select_Column {
  Address = 'address',
  Capacity = 'capacity',
  Coordinates = 'coordinates',
  District = 'district',
  Email = 'email',
  Id = 'id',
  LicenseBy = 'license_by',
  LicenseDate_5years = 'license_date_5years',
  LicenseDateProvisional = 'license_date_provisional',
  LicenseNo = 'license_no',
  Location = 'location',
  Name = 'name',
  ServiceId = 'service_id',
  SupplierId = 'supplier_id',
  TypeId = 'type_id',
}

export type Hasura_Providers_Stddev_Fields = {
  __typename?: 'HASURA_providers_stddev_fields';
  type_id?: Maybe<Scalars['Float']>;
};

export type Hasura_Providers_Stddev_Order_By = {
  type_id?: Maybe<Hasura_Order_By>;
};

export type Hasura_Providers_Stddev_Pop_Fields = {
  __typename?: 'HASURA_providers_stddev_pop_fields';
  type_id?: Maybe<Scalars['Float']>;
};

export type Hasura_Providers_Stddev_Pop_Order_By = {
  type_id?: Maybe<Hasura_Order_By>;
};

export type Hasura_Providers_Stddev_Samp_Fields = {
  __typename?: 'HASURA_providers_stddev_samp_fields';
  type_id?: Maybe<Scalars['Float']>;
};

export type Hasura_Providers_Stddev_Samp_Order_By = {
  type_id?: Maybe<Hasura_Order_By>;
};

export type Hasura_Providers_Sum_Fields = {
  __typename?: 'HASURA_providers_sum_fields';
  type_id?: Maybe<Scalars['HASURA_smallint']>;
};

export type Hasura_Providers_Sum_Order_By = {
  type_id?: Maybe<Hasura_Order_By>;
};

export type Hasura_Providers_Var_Pop_Fields = {
  __typename?: 'HASURA_providers_var_pop_fields';
  type_id?: Maybe<Scalars['Float']>;
};

export type Hasura_Providers_Var_Pop_Order_By = {
  type_id?: Maybe<Hasura_Order_By>;
};

export type Hasura_Providers_Var_Samp_Fields = {
  __typename?: 'HASURA_providers_var_samp_fields';
  type_id?: Maybe<Scalars['Float']>;
};

export type Hasura_Providers_Var_Samp_Order_By = {
  type_id?: Maybe<Hasura_Order_By>;
};

export type Hasura_Providers_Variance_Fields = {
  __typename?: 'HASURA_providers_variance_fields';
  type_id?: Maybe<Scalars['Float']>;
};

export type Hasura_Providers_Variance_Order_By = {
  type_id?: Maybe<Hasura_Order_By>;
};

export type Hasura_Query = {
  __typename?: 'HASURA_Query';
  asset?: Maybe<Hasura_Asset>;
  assets: Array<Maybe<Hasura_Asset>>;
  assetsConnection: Hasura_AssetConnection;
  blog?: Maybe<Hasura_Blog>;
  blogs: Array<Maybe<Hasura_Blog>>;
  blogsConnection: Hasura_BlogConnection;
  node?: Maybe<Hasura_Node>;
  page?: Maybe<Hasura_Page>;
  pages: Array<Maybe<Hasura_Page>>;
  pagesConnection: Hasura_PageConnection;
};

export type Hasura_QueryAssetArgs = {
  where: Hasura_AssetWhereUniqueInput;
};

export type Hasura_QueryAssetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Hasura_AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Hasura_AssetWhereInput>;
};

export type Hasura_QueryAssetsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Hasura_AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Hasura_AssetWhereInput>;
};

export type Hasura_QueryBlogArgs = {
  where: Hasura_BlogWhereUniqueInput;
};

export type Hasura_QueryBlogsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Hasura_BlogOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Hasura_BlogWhereInput>;
};

export type Hasura_QueryBlogsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Hasura_BlogOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Hasura_BlogWhereInput>;
};

export type Hasura_QueryNodeArgs = {
  id: Scalars['ID'];
};

export type Hasura_QueryPageArgs = {
  where: Hasura_PageWhereUniqueInput;
};

export type Hasura_QueryPagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Hasura_PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Hasura_PageWhereInput>;
};

export type Hasura_QueryPagesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Hasura_PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Hasura_PageWhereInput>;
};

export type Hasura_RichText = {
  __typename?: 'HASURA_RichText';
  html?: Maybe<Scalars['String']>;
  markdown?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['HASURA_RichTextAST']>;
  text?: Maybe<Scalars['String']>;
};

export type Hasura_Services = {
  __typename?: 'HASURA_services';
  category?: Maybe<Hasura_Categories>;
  category_id?: Maybe<Scalars['HASURA_uuid']>;
  code: Scalars['String'];
  id: Scalars['HASURA_uuid'];
  name?: Maybe<Scalars['String']>;
  providers: Array<Hasura_Providers>;
  providers_aggregate: Hasura_Providers_Aggregate;
};

export type Hasura_ServicesProvidersArgs = {
  distinct_on?: Maybe<Array<Hasura_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Providers_Order_By>>;
  where?: Maybe<Hasura_Providers_Bool_Exp>;
};

export type Hasura_ServicesProviders_AggregateArgs = {
  distinct_on?: Maybe<Array<Hasura_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Providers_Order_By>>;
  where?: Maybe<Hasura_Providers_Bool_Exp>;
};

export type Hasura_Services_Aggregate = {
  __typename?: 'HASURA_services_aggregate';
  aggregate?: Maybe<Hasura_Services_Aggregate_Fields>;
  nodes: Array<Hasura_Services>;
};

export type Hasura_Services_Aggregate_Fields = {
  __typename?: 'HASURA_services_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Hasura_Services_Max_Fields>;
  min?: Maybe<Hasura_Services_Min_Fields>;
};

export type Hasura_Services_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Hasura_Services_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Hasura_Services_Aggregate_Order_By = {
  count?: Maybe<Hasura_Order_By>;
  max?: Maybe<Hasura_Services_Max_Order_By>;
  min?: Maybe<Hasura_Services_Min_Order_By>;
};

export type Hasura_Services_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Hasura_Services_Bool_Exp>>>;
  _not?: Maybe<Hasura_Services_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Hasura_Services_Bool_Exp>>>;
  category?: Maybe<Hasura_Categories_Bool_Exp>;
  category_id?: Maybe<Hasura_Uuid_Comparison_Exp>;
  code?: Maybe<Hasura_String_Comparison_Exp>;
  id?: Maybe<Hasura_Uuid_Comparison_Exp>;
  name?: Maybe<Hasura_String_Comparison_Exp>;
  providers?: Maybe<Hasura_Providers_Bool_Exp>;
};

export type Hasura_Services_Max_Fields = {
  __typename?: 'HASURA_services_max_fields';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Hasura_Services_Max_Order_By = {
  code?: Maybe<Hasura_Order_By>;
  name?: Maybe<Hasura_Order_By>;
};

export type Hasura_Services_Min_Fields = {
  __typename?: 'HASURA_services_min_fields';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Hasura_Services_Min_Order_By = {
  code?: Maybe<Hasura_Order_By>;
  name?: Maybe<Hasura_Order_By>;
};

export type Hasura_Services_Order_By = {
  category?: Maybe<Hasura_Categories_Order_By>;
  category_id?: Maybe<Hasura_Order_By>;
  code?: Maybe<Hasura_Order_By>;
  id?: Maybe<Hasura_Order_By>;
  name?: Maybe<Hasura_Order_By>;
  providers_aggregate?: Maybe<Hasura_Providers_Aggregate_Order_By>;
};

export enum Hasura_Services_Select_Column {
  CategoryId = 'category_id',
  Code = 'code',
  Id = 'id',
  Name = 'name',
}

export type Hasura_Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['HASURA_smallint']>;
  _gt?: Maybe<Scalars['HASURA_smallint']>;
  _gte?: Maybe<Scalars['HASURA_smallint']>;
  _in?: Maybe<Array<Scalars['HASURA_smallint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['HASURA_smallint']>;
  _lte?: Maybe<Scalars['HASURA_smallint']>;
  _neq?: Maybe<Scalars['HASURA_smallint']>;
  _nin?: Maybe<Array<Scalars['HASURA_smallint']>>;
};

export enum Hasura_Status {
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
}

export type Hasura_String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Hasura_Supplier_Type = {
  __typename?: 'HASURA_supplier_type';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  private: Scalars['Boolean'];
  suppliers: Array<Hasura_Suppliers>;
  suppliers_aggregate: Hasura_Suppliers_Aggregate;
};

export type Hasura_Supplier_TypeSuppliersArgs = {
  distinct_on?: Maybe<Array<Hasura_Suppliers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Suppliers_Order_By>>;
  where?: Maybe<Hasura_Suppliers_Bool_Exp>;
};

export type Hasura_Supplier_TypeSuppliers_AggregateArgs = {
  distinct_on?: Maybe<Array<Hasura_Suppliers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Suppliers_Order_By>>;
  where?: Maybe<Hasura_Suppliers_Bool_Exp>;
};

export type Hasura_Supplier_Type_Aggregate = {
  __typename?: 'HASURA_supplier_type_aggregate';
  aggregate?: Maybe<Hasura_Supplier_Type_Aggregate_Fields>;
  nodes: Array<Hasura_Supplier_Type>;
};

export type Hasura_Supplier_Type_Aggregate_Fields = {
  __typename?: 'HASURA_supplier_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Hasura_Supplier_Type_Max_Fields>;
  min?: Maybe<Hasura_Supplier_Type_Min_Fields>;
};

export type Hasura_Supplier_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Hasura_Supplier_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Hasura_Supplier_Type_Aggregate_Order_By = {
  count?: Maybe<Hasura_Order_By>;
  max?: Maybe<Hasura_Supplier_Type_Max_Order_By>;
  min?: Maybe<Hasura_Supplier_Type_Min_Order_By>;
};

export type Hasura_Supplier_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Hasura_Supplier_Type_Bool_Exp>>>;
  _not?: Maybe<Hasura_Supplier_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Hasura_Supplier_Type_Bool_Exp>>>;
  description?: Maybe<Hasura_String_Comparison_Exp>;
  id?: Maybe<Hasura_String_Comparison_Exp>;
  name?: Maybe<Hasura_String_Comparison_Exp>;
  private?: Maybe<Hasura_Boolean_Comparison_Exp>;
  suppliers?: Maybe<Hasura_Suppliers_Bool_Exp>;
};

export type Hasura_Supplier_Type_Max_Fields = {
  __typename?: 'HASURA_supplier_type_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Hasura_Supplier_Type_Max_Order_By = {
  description?: Maybe<Hasura_Order_By>;
  id?: Maybe<Hasura_Order_By>;
  name?: Maybe<Hasura_Order_By>;
};

export type Hasura_Supplier_Type_Min_Fields = {
  __typename?: 'HASURA_supplier_type_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Hasura_Supplier_Type_Min_Order_By = {
  description?: Maybe<Hasura_Order_By>;
  id?: Maybe<Hasura_Order_By>;
  name?: Maybe<Hasura_Order_By>;
};

export type Hasura_Supplier_Type_Order_By = {
  description?: Maybe<Hasura_Order_By>;
  id?: Maybe<Hasura_Order_By>;
  name?: Maybe<Hasura_Order_By>;
  private?: Maybe<Hasura_Order_By>;
  suppliers_aggregate?: Maybe<Hasura_Suppliers_Aggregate_Order_By>;
};

export enum Hasura_Supplier_Type_Select_Column {
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Private = 'private',
}

export type Hasura_Suppliers = {
  __typename?: 'HASURA_suppliers';
  address?: Maybe<Scalars['String']>;
  certificate_serial_no?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['HASURA_timestamptz']>;
  cui_cif: Scalars['String'];
  decision_date?: Maybe<Scalars['HASURA_date']>;
  decision_no?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  id: Scalars['HASURA_uuid'];
  name?: Maybe<Scalars['String']>;
  providers: Array<Hasura_Providers>;
  providers_aggregate: Hasura_Providers_Aggregate;
  supplier_type?: Maybe<Hasura_Supplier_Type>;
  supplier_type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['HASURA_timestamptz']>;
  users: Array<Hasura_Users>;
  users_aggregate: Hasura_Users_Aggregate;
};

export type Hasura_SuppliersProvidersArgs = {
  distinct_on?: Maybe<Array<Hasura_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Providers_Order_By>>;
  where?: Maybe<Hasura_Providers_Bool_Exp>;
};

export type Hasura_SuppliersProviders_AggregateArgs = {
  distinct_on?: Maybe<Array<Hasura_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Providers_Order_By>>;
  where?: Maybe<Hasura_Providers_Bool_Exp>;
};

export type Hasura_SuppliersUsersArgs = {
  distinct_on?: Maybe<Array<Hasura_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Users_Order_By>>;
  where?: Maybe<Hasura_Users_Bool_Exp>;
};

export type Hasura_SuppliersUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Hasura_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hasura_Users_Order_By>>;
  where?: Maybe<Hasura_Users_Bool_Exp>;
};

export type Hasura_Suppliers_Aggregate = {
  __typename?: 'HASURA_suppliers_aggregate';
  aggregate?: Maybe<Hasura_Suppliers_Aggregate_Fields>;
  nodes: Array<Hasura_Suppliers>;
};

export type Hasura_Suppliers_Aggregate_Fields = {
  __typename?: 'HASURA_suppliers_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Hasura_Suppliers_Max_Fields>;
  min?: Maybe<Hasura_Suppliers_Min_Fields>;
};

export type Hasura_Suppliers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Hasura_Suppliers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Hasura_Suppliers_Aggregate_Order_By = {
  count?: Maybe<Hasura_Order_By>;
  max?: Maybe<Hasura_Suppliers_Max_Order_By>;
  min?: Maybe<Hasura_Suppliers_Min_Order_By>;
};

export type Hasura_Suppliers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Hasura_Suppliers_Bool_Exp>>>;
  _not?: Maybe<Hasura_Suppliers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Hasura_Suppliers_Bool_Exp>>>;
  address?: Maybe<Hasura_String_Comparison_Exp>;
  certificate_serial_no?: Maybe<Hasura_String_Comparison_Exp>;
  city?: Maybe<Hasura_String_Comparison_Exp>;
  created_at?: Maybe<Hasura_Timestamptz_Comparison_Exp>;
  cui_cif?: Maybe<Hasura_String_Comparison_Exp>;
  decision_date?: Maybe<Hasura_Date_Comparison_Exp>;
  decision_no?: Maybe<Hasura_String_Comparison_Exp>;
  district?: Maybe<Hasura_String_Comparison_Exp>;
  id?: Maybe<Hasura_Uuid_Comparison_Exp>;
  name?: Maybe<Hasura_String_Comparison_Exp>;
  providers?: Maybe<Hasura_Providers_Bool_Exp>;
  supplier_type?: Maybe<Hasura_Supplier_Type_Bool_Exp>;
  supplier_type_id?: Maybe<Hasura_String_Comparison_Exp>;
  updated_at?: Maybe<Hasura_Timestamptz_Comparison_Exp>;
  users?: Maybe<Hasura_Users_Bool_Exp>;
};

export type Hasura_Suppliers_Max_Fields = {
  __typename?: 'HASURA_suppliers_max_fields';
  address?: Maybe<Scalars['String']>;
  certificate_serial_no?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['HASURA_timestamptz']>;
  cui_cif?: Maybe<Scalars['String']>;
  decision_date?: Maybe<Scalars['HASURA_date']>;
  decision_no?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  supplier_type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['HASURA_timestamptz']>;
};

export type Hasura_Suppliers_Max_Order_By = {
  address?: Maybe<Hasura_Order_By>;
  certificate_serial_no?: Maybe<Hasura_Order_By>;
  city?: Maybe<Hasura_Order_By>;
  created_at?: Maybe<Hasura_Order_By>;
  cui_cif?: Maybe<Hasura_Order_By>;
  decision_date?: Maybe<Hasura_Order_By>;
  decision_no?: Maybe<Hasura_Order_By>;
  district?: Maybe<Hasura_Order_By>;
  name?: Maybe<Hasura_Order_By>;
  supplier_type_id?: Maybe<Hasura_Order_By>;
  updated_at?: Maybe<Hasura_Order_By>;
};

export type Hasura_Suppliers_Min_Fields = {
  __typename?: 'HASURA_suppliers_min_fields';
  address?: Maybe<Scalars['String']>;
  certificate_serial_no?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['HASURA_timestamptz']>;
  cui_cif?: Maybe<Scalars['String']>;
  decision_date?: Maybe<Scalars['HASURA_date']>;
  decision_no?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  supplier_type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['HASURA_timestamptz']>;
};

export type Hasura_Suppliers_Min_Order_By = {
  address?: Maybe<Hasura_Order_By>;
  certificate_serial_no?: Maybe<Hasura_Order_By>;
  city?: Maybe<Hasura_Order_By>;
  created_at?: Maybe<Hasura_Order_By>;
  cui_cif?: Maybe<Hasura_Order_By>;
  decision_date?: Maybe<Hasura_Order_By>;
  decision_no?: Maybe<Hasura_Order_By>;
  district?: Maybe<Hasura_Order_By>;
  name?: Maybe<Hasura_Order_By>;
  supplier_type_id?: Maybe<Hasura_Order_By>;
  updated_at?: Maybe<Hasura_Order_By>;
};

export type Hasura_Suppliers_Order_By = {
  address?: Maybe<Hasura_Order_By>;
  certificate_serial_no?: Maybe<Hasura_Order_By>;
  city?: Maybe<Hasura_Order_By>;
  created_at?: Maybe<Hasura_Order_By>;
  cui_cif?: Maybe<Hasura_Order_By>;
  decision_date?: Maybe<Hasura_Order_By>;
  decision_no?: Maybe<Hasura_Order_By>;
  district?: Maybe<Hasura_Order_By>;
  id?: Maybe<Hasura_Order_By>;
  name?: Maybe<Hasura_Order_By>;
  providers_aggregate?: Maybe<Hasura_Providers_Aggregate_Order_By>;
  supplier_type?: Maybe<Hasura_Supplier_Type_Order_By>;
  supplier_type_id?: Maybe<Hasura_Order_By>;
  updated_at?: Maybe<Hasura_Order_By>;
  users_aggregate?: Maybe<Hasura_Users_Aggregate_Order_By>;
};

export enum Hasura_Suppliers_Select_Column {
  Address = 'address',
  CertificateSerialNo = 'certificate_serial_no',
  City = 'city',
  CreatedAt = 'created_at',
  CuiCif = 'cui_cif',
  DecisionDate = 'decision_date',
  DecisionNo = 'decision_no',
  District = 'district',
  Id = 'id',
  Name = 'name',
  SupplierTypeId = 'supplier_type_id',
  UpdatedAt = 'updated_at',
}

export type Hasura_Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['HASURA_timestamptz']>;
  _gt?: Maybe<Scalars['HASURA_timestamptz']>;
  _gte?: Maybe<Scalars['HASURA_timestamptz']>;
  _in?: Maybe<Array<Scalars['HASURA_timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['HASURA_timestamptz']>;
  _lte?: Maybe<Scalars['HASURA_timestamptz']>;
  _neq?: Maybe<Scalars['HASURA_timestamptz']>;
  _nin?: Maybe<Array<Scalars['HASURA_timestamptz']>>;
};

export type Hasura_Users = {
  __typename?: 'HASURA_users';
  active: Scalars['Boolean'];
  created_at: Scalars['HASURA_timestamptz'];
  email: Scalars['String'];
  id: Scalars['String'];
  phone: Scalars['String'];
  supplier?: Maybe<Hasura_Suppliers>;
  supplier_id?: Maybe<Scalars['HASURA_uuid']>;
  username: Scalars['String'];
};

export type Hasura_Users_Aggregate = {
  __typename?: 'HASURA_users_aggregate';
  aggregate?: Maybe<Hasura_Users_Aggregate_Fields>;
  nodes: Array<Hasura_Users>;
};

export type Hasura_Users_Aggregate_Fields = {
  __typename?: 'HASURA_users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Hasura_Users_Max_Fields>;
  min?: Maybe<Hasura_Users_Min_Fields>;
};

export type Hasura_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Hasura_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Hasura_Users_Aggregate_Order_By = {
  count?: Maybe<Hasura_Order_By>;
  max?: Maybe<Hasura_Users_Max_Order_By>;
  min?: Maybe<Hasura_Users_Min_Order_By>;
};

export type Hasura_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Hasura_Users_Bool_Exp>>>;
  _not?: Maybe<Hasura_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Hasura_Users_Bool_Exp>>>;
  active?: Maybe<Hasura_Boolean_Comparison_Exp>;
  created_at?: Maybe<Hasura_Timestamptz_Comparison_Exp>;
  email?: Maybe<Hasura_String_Comparison_Exp>;
  id?: Maybe<Hasura_String_Comparison_Exp>;
  phone?: Maybe<Hasura_String_Comparison_Exp>;
  supplier?: Maybe<Hasura_Suppliers_Bool_Exp>;
  supplier_id?: Maybe<Hasura_Uuid_Comparison_Exp>;
  username?: Maybe<Hasura_String_Comparison_Exp>;
};

export type Hasura_Users_Max_Fields = {
  __typename?: 'HASURA_users_max_fields';
  created_at?: Maybe<Scalars['HASURA_timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type Hasura_Users_Max_Order_By = {
  created_at?: Maybe<Hasura_Order_By>;
  email?: Maybe<Hasura_Order_By>;
  id?: Maybe<Hasura_Order_By>;
  phone?: Maybe<Hasura_Order_By>;
  username?: Maybe<Hasura_Order_By>;
};

export type Hasura_Users_Min_Fields = {
  __typename?: 'HASURA_users_min_fields';
  created_at?: Maybe<Scalars['HASURA_timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type Hasura_Users_Min_Order_By = {
  created_at?: Maybe<Hasura_Order_By>;
  email?: Maybe<Hasura_Order_By>;
  id?: Maybe<Hasura_Order_By>;
  phone?: Maybe<Hasura_Order_By>;
  username?: Maybe<Hasura_Order_By>;
};

export type Hasura_Users_Order_By = {
  active?: Maybe<Hasura_Order_By>;
  created_at?: Maybe<Hasura_Order_By>;
  email?: Maybe<Hasura_Order_By>;
  id?: Maybe<Hasura_Order_By>;
  phone?: Maybe<Hasura_Order_By>;
  supplier?: Maybe<Hasura_Suppliers_Order_By>;
  supplier_id?: Maybe<Hasura_Order_By>;
  username?: Maybe<Hasura_Order_By>;
};

export enum Hasura_Users_Select_Column {
  Active = 'active',
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  Phone = 'phone',
  SupplierId = 'supplier_id',
  Username = 'username',
}

export type Hasura_Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['HASURA_uuid']>;
  _gt?: Maybe<Scalars['HASURA_uuid']>;
  _gte?: Maybe<Scalars['HASURA_uuid']>;
  _in?: Maybe<Array<Scalars['HASURA_uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['HASURA_uuid']>;
  _lte?: Maybe<Scalars['HASURA_uuid']>;
  _neq?: Maybe<Scalars['HASURA_uuid']>;
  _nin?: Maybe<Array<Scalars['HASURA_uuid']>>;
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION',
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  graphQlSource?: Maybe<GraphQlSource>;
  allGraphQlSource: GraphQlSourceConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  hasura: Hasura;
};

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryGraphQlSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>;
  sort?: Maybe<GraphQlSourceSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataSiteTitle = 'siteMetadata___siteTitle',
  SiteMetadataSiteTitleShort = 'siteMetadata___siteTitleShort',
  SiteMetadataSiteDescription = 'siteMetadata___siteDescription',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataLogo = 'siteMetadata___logo',
  SiteMetadataSocialTwitter = 'siteMetadata___social___twitter',
  SiteMetadataSocialFbAppId = 'siteMetadata___social___fbAppId',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime',
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  internalComponentName?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  componentChunkName?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextSlug = 'context___slug',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsFonts = 'pluginCreator___pluginOptions___fonts',
  PluginCreatorPluginOptionsFontsFamily = 'pluginCreator___pluginOptions___fonts___family',
  PluginCreatorPluginOptionsFontsSubsets = 'pluginCreator___pluginOptions___fonts___subsets',
  PluginCreatorPluginOptionsFontsVariants = 'pluginCreator___pluginOptions___fonts___variants',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsHeadersContentType = 'pluginCreator___pluginOptions___headers___content_type',
  PluginCreatorPluginOptionsMergeSecurityHeaders = 'pluginCreator___pluginOptions___mergeSecurityHeaders',
  PluginCreatorPluginOptionsMergeLinkHeaders = 'pluginCreator___pluginOptions___mergeLinkHeaders',
  PluginCreatorPluginOptionsMergeCachingHeaders = 'pluginCreator___pluginOptions___mergeCachingHeaders',
  PluginCreatorPluginOptionsGenerateMatchPathRewrites = 'pluginCreator___pluginOptions___generateMatchPathRewrites',
  PluginCreatorPluginOptionsCachePublic = 'pluginCreator___pluginOptions___cachePublic',
  PluginCreatorPluginOptionsPostCssPlugins = 'pluginCreator___pluginOptions___postCssPlugins',
  PluginCreatorPluginOptionsLinkStyles = 'pluginCreator___pluginOptions___linkStyles',
  PluginCreatorPluginOptionsPreferCanvas = 'pluginCreator___pluginOptions___preferCanvas',
  PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
  PluginCreatorPluginOptionsMaxHeight = 'pluginCreator___pluginOptions___maxHeight',
  PluginCreatorPluginOptionsTypeName = 'pluginCreator___pluginOptions___typeName',
  PluginCreatorPluginOptionsFieldName = 'pluginCreator___pluginOptions___fieldName',
  PluginCreatorPluginOptionsUrl = 'pluginCreator___pluginOptions___url',
  PluginCreatorPluginOptionsRefetchInterval = 'pluginCreator___pluginOptions___refetchInterval',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsFonts = 'pluginOptions___fonts',
  PluginOptionsFontsFamily = 'pluginOptions___fonts___family',
  PluginOptionsFontsSubsets = 'pluginOptions___fonts___subsets',
  PluginOptionsFontsVariants = 'pluginOptions___fonts___variants',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsHeadersContentType = 'pluginOptions___headers___content_type',
  PluginOptionsMergeSecurityHeaders = 'pluginOptions___mergeSecurityHeaders',
  PluginOptionsMergeLinkHeaders = 'pluginOptions___mergeLinkHeaders',
  PluginOptionsMergeCachingHeaders = 'pluginOptions___mergeCachingHeaders',
  PluginOptionsGenerateMatchPathRewrites = 'pluginOptions___generateMatchPathRewrites',
  PluginOptionsCachePublic = 'pluginOptions___cachePublic',
  PluginOptionsPostCssPlugins = 'pluginOptions___postCssPlugins',
  PluginOptionsLinkStyles = 'pluginOptions___linkStyles',
  PluginOptionsPreferCanvas = 'pluginOptions___preferCanvas',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsMaxHeight = 'pluginOptions___maxHeight',
  PluginOptionsTypeName = 'pluginOptions___typeName',
  PluginOptionsFieldName = 'pluginOptions___fieldName',
  PluginOptionsUrl = 'pluginOptions___url',
  PluginOptionsRefetchInterval = 'pluginOptions___refetchInterval',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  fonts?: Maybe<Array<Maybe<SitePluginPluginOptionsFonts>>>;
  display?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  mergeSecurityHeaders?: Maybe<Scalars['Boolean']>;
  mergeLinkHeaders?: Maybe<Scalars['Boolean']>;
  mergeCachingHeaders?: Maybe<Scalars['Boolean']>;
  generateMatchPathRewrites?: Maybe<Scalars['Boolean']>;
  cachePublic?: Maybe<Scalars['Boolean']>;
  postCssPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPostCssPlugins>>>;
  linkStyles?: Maybe<Scalars['Boolean']>;
  preferCanvas?: Maybe<Scalars['Boolean']>;
  maxWidth?: Maybe<Scalars['String']>;
  maxHeight?: Maybe<Scalars['Int']>;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  refetchInterval?: Maybe<Scalars['Int']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  fonts?: Maybe<SitePluginPluginOptionsFontsFilterListInput>;
  display?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  mergeSecurityHeaders?: Maybe<BooleanQueryOperatorInput>;
  mergeLinkHeaders?: Maybe<BooleanQueryOperatorInput>;
  mergeCachingHeaders?: Maybe<BooleanQueryOperatorInput>;
  generateMatchPathRewrites?: Maybe<BooleanQueryOperatorInput>;
  cachePublic?: Maybe<BooleanQueryOperatorInput>;
  postCssPlugins?: Maybe<SitePluginPluginOptionsPostCssPluginsFilterListInput>;
  linkStyles?: Maybe<BooleanQueryOperatorInput>;
  preferCanvas?: Maybe<BooleanQueryOperatorInput>;
  maxWidth?: Maybe<StringQueryOperatorInput>;
  maxHeight?: Maybe<IntQueryOperatorInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  refetchInterval?: Maybe<IntQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsFonts = {
  __typename?: 'SitePluginPluginOptionsFonts';
  family?: Maybe<Scalars['String']>;
  subsets?: Maybe<Array<Maybe<Scalars['String']>>>;
  variants?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsFontsFilterInput = {
  family?: Maybe<StringQueryOperatorInput>;
  subsets?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFontsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFontsFilterInput>;
};

export type SitePluginPluginOptionsHeaders = {
  __typename?: 'SitePluginPluginOptionsHeaders';
  content_type?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  content_type?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPlugins = {
  __typename?: 'SitePluginPluginOptionsPostCssPlugins';
  theme?: Maybe<SitePluginPluginOptionsPostCssPluginsTheme>;
};

export type SitePluginPluginOptionsPostCssPluginsFilterInput = {
  theme?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPostCssPluginsFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsTheme = {
  __typename?: 'SitePluginPluginOptionsPostCssPluginsTheme';
  colors?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColors>;
  screens?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeScreens>;
  listStyleType?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeListStyleType>;
  extend?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtend>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeColors = {
  __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeColors';
  transparent?: Maybe<Scalars['String']>;
  black?: Maybe<Scalars['String']>;
  white?: Maybe<Scalars['String']>;
  grey?: Maybe<Scalars['String']>;
  celeste?: Maybe<Scalars['String']>;
  leaf?: Maybe<Scalars['String']>;
  leaf2?: Maybe<Scalars['String']>;
  brown?: Maybe<Scalars['String']>;
  lightbrown?: Maybe<Scalars['String']>;
  snow?: Maybe<Scalars['String']>;
  burg?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsFilterInput = {
  transparent?: Maybe<StringQueryOperatorInput>;
  black?: Maybe<StringQueryOperatorInput>;
  white?: Maybe<StringQueryOperatorInput>;
  grey?: Maybe<StringQueryOperatorInput>;
  celeste?: Maybe<StringQueryOperatorInput>;
  leaf?: Maybe<StringQueryOperatorInput>;
  leaf2?: Maybe<StringQueryOperatorInput>;
  brown?: Maybe<StringQueryOperatorInput>;
  lightbrown?: Maybe<StringQueryOperatorInput>;
  snow?: Maybe<StringQueryOperatorInput>;
  burg?: Maybe<StringQueryOperatorInput>;
  error?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtend = {
  __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeExtend';
  margin?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendMargin>;
  borderWidth?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendBorderWidth>;
  spacing?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendSpacing>;
  maxWidth?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendMaxWidth>;
  inset?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendInset>;
  fontSize?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendFontSize>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendBorderWidth = {
  __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeExtendBorderWidth';
  _6?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendBorderWidthFilterInput = {
  _6?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendFilterInput = {
  margin?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendMarginFilterInput>;
  borderWidth?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendBorderWidthFilterInput>;
  spacing?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendSpacingFilterInput>;
  maxWidth?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendMaxWidthFilterInput>;
  inset?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendInsetFilterInput>;
  fontSize?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendFontSizeFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendFontSize = {
  __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeExtendFontSize';
  _1xl?: Maybe<Scalars['String']>;
  _3xl?: Maybe<Scalars['String']>;
  _3xxl?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendFontSizeFilterInput = {
  _1xl?: Maybe<StringQueryOperatorInput>;
  _3xl?: Maybe<StringQueryOperatorInput>;
  _3xxl?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendInset = {
  __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeExtendInset';
  _1_4?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendInsetFilterInput = {
  _1_4?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendMargin = {
  __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeExtendMargin';
  _36?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendMarginFilterInput = {
  _36?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendMaxWidth = {
  __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeExtendMaxWidth';
  screen?: Maybe<Scalars['String']>;
  gridt?: Maybe<Scalars['String']>;
  griddw?: Maybe<Scalars['String']>;
  gridd?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendMaxWidthFilterInput = {
  screen?: Maybe<StringQueryOperatorInput>;
  gridt?: Maybe<StringQueryOperatorInput>;
  griddw?: Maybe<StringQueryOperatorInput>;
  gridd?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendSpacing = {
  __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeExtendSpacing';
  s?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendSpacingFilterInput = {
  s?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeFilterInput = {
  colors?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsFilterInput>;
  screens?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeScreensFilterInput>;
  listStyleType?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeListStyleTypeFilterInput>;
  extend?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeListStyleType = {
  __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeListStyleType';
  none?: Maybe<Scalars['String']>;
  disc?: Maybe<Scalars['String']>;
  decimal?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeListStyleTypeFilterInput = {
  none?: Maybe<StringQueryOperatorInput>;
  disc?: Maybe<StringQueryOperatorInput>;
  decimal?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeScreens = {
  __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeScreens';
  sm?: Maybe<Scalars['String']>;
  md?: Maybe<Scalars['String']>;
  lg?: Maybe<Scalars['String']>;
  xl?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeScreensFilterInput = {
  sm?: Maybe<StringQueryOperatorInput>;
  md?: Maybe<StringQueryOperatorInput>;
  lg?: Maybe<StringQueryOperatorInput>;
  xl?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  siteTitle?: Maybe<Scalars['String']>;
  siteTitleShort?: Maybe<Scalars['String']>;
  siteDescription?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  social?: Maybe<SiteSiteMetadataSocial>;
};

export type SiteSiteMetadataFilterInput = {
  siteTitle?: Maybe<StringQueryOperatorInput>;
  siteTitleShort?: Maybe<StringQueryOperatorInput>;
  siteDescription?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
  social?: Maybe<SiteSiteMetadataSocialFilterInput>;
};

export type SiteSiteMetadataSocial = {
  __typename?: 'SiteSiteMetadataSocial';
  twitter?: Maybe<Scalars['String']>;
  fbAppId?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataSocialFilterInput = {
  twitter?: Maybe<StringQueryOperatorInput>;
  fbAppId?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type GatsbyImageSharpFixedFragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_TracedSvgFragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_WithWebpFragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_NoBase64Fragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFluidFragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_TracedSvgFragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebpFragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpFluid_NoBase64Fragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpResolutionsFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_WithWebpFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = { __typename?: 'ImageSharpResolutions' } & Pick<
  ImageSharpResolutions,
  'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpResolutions' } & Pick<
  ImageSharpResolutions,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpSizesFragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_TracedSvgFragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebpFragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpSizes_NoBase64Fragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type Unnamed_1_QueryVariables = {};

export type Unnamed_1_Query = { __typename?: 'Query' } & {
  hasura: { __typename?: 'HASURA' } & {
    providers: Array<{ __typename?: 'HASURA_providers' } & Pick<Hasura_Providers, 'id' | 'coordinates' | 'name'>>;
  };
};

export type Unnamed_2_QueryVariables = {};

export type Unnamed_2_Query = { __typename?: 'Query' } & {
  hasura: { __typename?: 'HASURA' } & {
    blogs: Array<
      Maybe<
        { __typename?: 'HASURA_Blog' } & Pick<Hasura_Blog, 'id' | 'publishedAt' | 'title' | 'summary' | 'slug'> & {
            image: Maybe<
              { __typename?: 'HASURA_Asset' } & Pick<Hasura_Asset, 'url'> & {
                  urlSharp: Maybe<
                    { __typename?: 'File' } & {
                      childImageSharp: Maybe<
                        { __typename?: 'ImageSharp' } & {
                          fluid: Maybe<{ __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluid_WithWebpFragment>;
                        }
                      >;
                    }
                  >;
                }
            >;
          }
      >
    >;
  };
};

export type HeroQueryQueryVariables = {};

export type HeroQueryQuery = { __typename?: 'Query' } & {
  file: Maybe<
    { __typename?: 'File' } & {
      childImageSharp: Maybe<
        { __typename?: 'ImageSharp' } & {
          fluid: Maybe<{ __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluid_TracedSvgFragment>;
        }
      >;
    }
  >;
};

export type Unnamed_3_QueryVariables = {};

export type Unnamed_3_Query = { __typename?: 'Query' } & {
  face1: Maybe<
    { __typename?: 'File' } & {
      childImageSharp: Maybe<
        { __typename?: 'ImageSharp' } & { fixed: Maybe<{ __typename?: 'ImageSharpFixed' } & GatsbyImageSharpFixedFragment> }
      >;
    }
  >;
  face2: Maybe<
    { __typename?: 'File' } & {
      childImageSharp: Maybe<
        { __typename?: 'ImageSharp' } & { fixed: Maybe<{ __typename?: 'ImageSharpFixed' } & GatsbyImageSharpFixedFragment> }
      >;
    }
  >;
};

export type Unnamed_4_QueryVariables = {};

export type Unnamed_4_Query = { __typename?: 'Query' } & {
  hasura: { __typename?: 'HASURA' } & {
    publicServices: { __typename?: 'HASURA_providers_aggregate' } & {
      aggregate: Maybe<{ __typename?: 'HASURA_providers_aggregate_fields' } & Pick<Hasura_Providers_Aggregate_Fields, 'count'>>;
    };
    privateServices: { __typename?: 'HASURA_providers_aggregate' } & {
      aggregate: Maybe<{ __typename?: 'HASURA_providers_aggregate_fields' } & Pick<Hasura_Providers_Aggregate_Fields, 'count'>>;
    };
    homelessServices: { __typename?: 'HASURA_providers_aggregate' } & {
      aggregate: Maybe<{ __typename?: 'HASURA_providers_aggregate_fields' } & Pick<Hasura_Providers_Aggregate_Fields, 'count'>>;
    };
    childServices: { __typename?: 'HASURA_providers_aggregate' } & {
      aggregate: Maybe<{ __typename?: 'HASURA_providers_aggregate_fields' } & Pick<Hasura_Providers_Aggregate_Fields, 'count'>>;
    };
    publicSuppliers: { __typename?: 'HASURA_suppliers_aggregate' } & {
      aggregate: Maybe<{ __typename?: 'HASURA_suppliers_aggregate_fields' } & Pick<Hasura_Suppliers_Aggregate_Fields, 'count'>>;
    };
    privateSuppliers: { __typename?: 'HASURA_suppliers_aggregate' } & {
      aggregate: Maybe<{ __typename?: 'HASURA_suppliers_aggregate_fields' } & Pick<Hasura_Suppliers_Aggregate_Fields, 'count'>>;
    };
  };
};

export type Unnamed_5_QueryVariables = {};

export type Unnamed_5_Query = { __typename?: 'Query' } & {
  hasura: { __typename?: 'HASURA' } & {
    blogs: Array<
      Maybe<
        { __typename?: 'HASURA_Blog' } & Pick<Hasura_Blog, 'id' | 'title' | 'summary' | 'slug' | 'featured' | 'createdAt'> & {
            image: Maybe<
              { __typename?: 'HASURA_Asset' } & Pick<Hasura_Asset, 'url'> & {
                  urlSharp: Maybe<
                    { __typename?: 'File' } & {
                      childImageSharp: Maybe<
                        { __typename?: 'ImageSharp' } & {
                          fluid: Maybe<{ __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluid_WithWebpFragment>;
                        }
                      >;
                    }
                  >;
                }
            >;
          }
      >
    >;
  };
};

export type BlogPostBySlugQueryVariables = {
  slug: Scalars['String'];
};

export type BlogPostBySlugQuery = { __typename?: 'Query' } & {
  hasura: { __typename?: 'HASURA' } & {
    blog: Maybe<
      { __typename?: 'HASURA_Blog' } & Pick<Hasura_Blog, 'title' | 'summary' | 'publishedAt' | 'slug'> & {
          content: Maybe<{ __typename?: 'HASURA_RichText' } & Pick<Hasura_RichText, 'html'>>;
          image: Maybe<
            { __typename?: 'HASURA_Asset' } & Pick<Hasura_Asset, 'url'> & {
                urlSharp: Maybe<
                  { __typename?: 'File' } & {
                    childImageSharp: Maybe<
                      { __typename?: 'ImageSharp' } & {
                        fluid: Maybe<{ __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluid_WithWebpFragment>;
                      }
                    >;
                  }
                >;
              }
          >;
        }
    >;
  };
};

export type PageBySlugQueryVariables = {
  slug: Scalars['String'];
};

export type PageBySlugQuery = { __typename?: 'Query' } & {
  hasura: { __typename?: 'HASURA' } & {
    page: Maybe<
      { __typename?: 'HASURA_Page' } & Pick<Hasura_Page, 'title' | 'summary' | 'slug' | 'additionalData' | 'header'> & {
          content: Maybe<{ __typename?: 'HASURA_RichText' } & Pick<Hasura_RichText, 'html'>>;
          image: Maybe<
            { __typename?: 'HASURA_Asset' } & Pick<Hasura_Asset, 'url'> & {
                urlSharp: Maybe<
                  { __typename?: 'File' } & {
                    childImageSharp: Maybe<
                      { __typename?: 'ImageSharp' } & {
                        fluid: Maybe<{ __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluid_WithWebpFragment>;
                      }
                    >;
                  }
                >;
              }
          >;
        }
    >;
  };
};
