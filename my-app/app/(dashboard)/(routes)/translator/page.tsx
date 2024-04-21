import { Heading } from "@/components/heading";
import { Brain, Voicemail } from "lucide-react";

const translatorpage = () => {
  return (
    <div>
      <Heading
        title="Translate in real time"
        description="Plan your day with ease"
        icon={Voicemail}
        iconColor="text-violet-500"
        bgcolor="bg-violet-500/10"
        url="https://streamlit-image.onrender.com/"
      />
      <iframe src="http://localhost:8503/" width="100%" height="800px" title="Embedded Content"></iframe>
    </div>
  );
}

export default translatorpage;