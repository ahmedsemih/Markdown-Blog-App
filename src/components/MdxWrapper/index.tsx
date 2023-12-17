import { useMDXComponent } from "next-contentlayer/hooks";

import Alert from "../Alert";
import PostLink from "../PostLink";

type Props = {
  code: string;
};

const components = {
  Alert: Alert,
  PostLink: PostLink
};

const MdxWrapper = ({ code }: Props) => {
  const Wrapper = useMDXComponent(code, { components });

  return <Wrapper components={components} />;
};

export default MdxWrapper;
