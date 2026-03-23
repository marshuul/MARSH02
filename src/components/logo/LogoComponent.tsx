type LogoComponentProps = {
  width?: string;
  height?: string;
};

export default function LogoComponent({ width, height }: LogoComponentProps) {
  return (
    <>
      <img
        src={"/assets/images/logo-light.png"}
        alt="logo"
        style={{ width: width || "27px", height: height || "auto" }}
      />
    </>
  );
}
