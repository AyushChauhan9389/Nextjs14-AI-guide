"use client"
import { Heading } from "@/components/heading";
import { Brain } from "lucide-react";
const plannerPage = () => {
  
  return (
    <div>
      <Heading
        title="Planner"
        description="Plan your day with ease"
        icon={Brain}
        iconColor="text-violet-500"
        bgcolor="bg-violet-500/10"
        url="https://streamlit-image.onrender.com/"
      />
      <div>
        <iframe src="http://localhost:8502/" width="100%" height="800px" title="Embedded Content"></iframe>
      </div>
    </div>
  );
}

export default plannerPage;