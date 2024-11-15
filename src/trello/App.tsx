import styled, { createGlobalStyle } from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    background-color: ${(props) => props.theme.bgColor};
    line-height: 1.2;
  }
  a {
    text-decoration: none;
    color: #18181a;
    &:active {
      color: #18181a;
    }
  }
  ul {
    list-style: none;
    padding-inline-start: 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;
const Board = styled.div`
  background-color: ${props => props.theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
`;
const Card = styled.div`
  border-radius: 5px;
  padding: 5px 10px;
  background-color: ${props => props.theme.cardColor};

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const toDos = ['a', 'b', 'c', 'd', 'e', 'f'];

function App() {
  const onDragEnd = () => {};

  return (
    <>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            <Droppable droppableId="one">
              {(provided) => (
                <Board ref={provided.innerRef} {...provided.droppableProps}>
                  {
                    toDos.map((toDo, idx) => (
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
                    ))}
                    { provided.placeholder }
                </Board>
              )}
            </Droppable>
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;