import { Heading } from "@/components/heading";
import { Brain } from "lucide-react";

const finderPage = () => {
  return (
    <div>
      <Heading
        title="Finder"
        description="Find attractive spots by images"
        icon={Brain}
        iconColor="text-violet-500"
        bgcolor="bg-violet-500/10"
        url="https://streamlit-image.onrender.com/"
      />
      <iframe src="http://localhost:8501/" width="100%" height="800px" title="Embedded Content"></iframe>
    </div>
  );
}

export default finderPage;