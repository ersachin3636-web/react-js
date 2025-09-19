import Code from "./code";
import Welcome from "./Welcome";

export default function ConditionalComponenet() {
  const display = true;
  if (display) {
    return <Welcome />;
  }
  return null;
}
