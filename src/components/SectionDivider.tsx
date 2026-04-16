interface Props {
  from: string;
  to: string;
  height?: string;
}

const SectionDivider = ({ from, to, height = "120px" }: Props) => (
  <div
    className="w-full"
    style={{
      height,
      background: `linear-gradient(to bottom, hsl(var(${from})), hsl(var(${to})))`,
    }}
  />
);

export default SectionDivider;
