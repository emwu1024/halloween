import "./list.css";

export default function ListBoard(props: { items: string[] }) {
  return (
    <div className="list-board-container">
      <h2 className="list-heading">Category List</h2>
      <div className="list-container">
        <div className="list-column">
          {props.items
            .filter((_, index) => index % 2 === 0)
            .map((currentItem: string, i: number) => (
              <p key={`${currentItem}-${i}`}>{currentItem}</p>
            ))}
        </div>
        <div className="list-column">
          {props.items
            .filter((_, index) => index % 2 === 1)
            .map((currentItem: string, i: number) => (
              <p key={`${currentItem}-${i}`}>{currentItem}</p>
            ))}
        </div>
      </div>
    </div>
  );
}
