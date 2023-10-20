import { useState } from "react";
import { TabbedProps } from "../App";
import { DifferentContent } from "./DifferentContent";
import { TabContent } from "./TabContent";
import { Tab } from "./Tab";
import { TabsContainer } from "./StyledTabs";

export function Tabbed({ content }: TabbedProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TabsContainer>
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </TabsContainer>

      {activeTab <= 2 && content[activeTab] ? (
        <TabContent
          item={content[activeTab]}
          key={content.at(activeTab)?.summary}
        />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}
