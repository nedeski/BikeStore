import { footerDataInterface } from "./FooterLabels";

export const FooterListComponent = (listLabel: footerDataInterface) => {
  return (
    <div className="footerListComponent">
      <h3>{listLabel.title}</h3>
      <ul>
        {listLabel.labels.map((el, key) => {
          return (
            <li key={key}>
              <a href="#">{el}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
