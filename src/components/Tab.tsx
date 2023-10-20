import { TabProps } from "../App";
import { StyledTabButton } from "./StyledTabs";

export function Tab({ num, activeTab, onClick }: TabProps) {
  return (
    <StyledTabButton $isActive={activeTab === num} onClick={() => onClick(num)}>
      Tab {num + 1}
    </StyledTabButton>
  );
}
