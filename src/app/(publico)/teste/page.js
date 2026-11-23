import { GlobalSubtitle, GlobalTitle } from "@/components/text/text";
import { GlobalArrowLeft, GlobalArrowRight } from "@/components/svg/svg";

export default function Teste() {
  return (
    <div>
      <GlobalTitle title={"tituloo"} />
      <GlobalSubtitle subtitle={"subtituloo"} />
      <GlobalArrowLeft />
      <GlobalArrowRight />
    </div>
  );
}
