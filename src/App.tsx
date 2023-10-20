import { Tabbed } from "./components/Tabbed";
import GlobalStyles from "./components/GlobalStyles";
import { content } from "./data/data";

interface ContentItem {
  summary: string;
  details: string;
}

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Tabbed content={content} />
      </div>
    </>
  );
}

export interface TabbedProps {
  content: ContentItem[];
}

export interface TabProps {
  num: number;
  activeTab: number;
  onClick: (num: number) => void;
}
export interface TabContentProps {
  item: ContentItem;
}
