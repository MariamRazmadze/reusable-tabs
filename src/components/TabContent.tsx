import { useState } from "react";
import { TabContentProps } from "../App";
import {
  StyledTabContent,
  StyledTabActions,
  Button,
  StyledHeartsCounter,
  StyledTabUndo,
} from "./StyledTabs";

export function TabContent({ item }: TabContentProps) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes((likes) => likes + 1);
  }

  function handleUndo() {
    setShowDetails(true);
    setLikes(0);
  }

  function handleUndolater() {
    setTimeout(handleUndo, 3000);
  }

  return (
    <StyledTabContent>
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <StyledTabActions>
        <Button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </Button>

        <StyledHeartsCounter>
          <span>{likes} ❤️</span>
          <Button onClick={handleInc}>+</Button>
        </StyledHeartsCounter>
      </StyledTabActions>

      <StyledTabUndo>
        <Button onClick={handleUndo}>Undo</Button>
        <Button onClick={handleUndolater}>Undo in 3s</Button>
      </StyledTabUndo>
    </StyledTabContent>
  );
}
