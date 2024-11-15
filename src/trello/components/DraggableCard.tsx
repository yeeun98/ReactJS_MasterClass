import { Draggable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "../atom";
import { styled } from "styled-components";
import React from "react";

const Card = styled.div`
  border-radius: 5px;
  padding: 5px 10px;
  background-color: ${props => props.theme.cardColor};

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

interface IDraggableCardProps {
  toDo: string;
  idx: number;
}

function DraggableCard({ toDo, idx }: IDraggableCardProps) {
  return (
    <Draggable draggableId={toDo} index={idx}>
      {(magic) => (
        <Card 
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          <span>🔥</span>
          { toDo }
        </Card>
      )}
    </Draggable>
  )
}

// 컴포넌트가 props로 동일한 결과를 렌더링하면, React.memo를 호출하고 결과를 메모이징(Memoizaing) 하도록 래핑하여 경우에 따라 성능 향상을 할 수 있다.
// 즉, React는 컴포넌트를 재렌더링하지 않고 마지막으로 렌더링된 결과를 재사용한다.
export default React.memo(DraggableCard);