import { useState } from "react";
import "../App.css";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModel } from "../components/CreateContentModel";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";

export function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <div>
      <Sidebar />

      {/* Main Content below */}
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModel
          open={modelOpen}
          onClose={() => setModelOpen(false)}
        />
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModelOpen(true);
            }}
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
          ></Button>
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          ></Button>
        </div>
        <div className="flex gap-4">
          <Card
            type="twitter"
            link="https://x.com/jack/status/20"
            title="First Tweet"
          />

          <Card
            type="youtube"
            link="https://www.youtube.com/watch?v=qVR9xsIkINQ"
            title="First Video"
          />
        </div>
      </div>
    </div>
  );
}
