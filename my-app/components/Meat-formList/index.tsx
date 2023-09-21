// MeatformList.tsx
import './meat-formList.css';

import Meatform from '../Meat-form';

type Item = {
  name: string;
  image: string;
  checkbox: boolean;
};

type MeatformListProps = {
  data: Item[];
  checkboxState: Record<string, boolean>;
  onCheckboxChange: (name: string, isChecked: boolean) => void;
};

function MeatformList(props: MeatformListProps) {
  const { data, checkboxState, onCheckboxChange } = props;

  return (
    <div className="meat-container">
      <h2 className="meat-title"></h2>
      <div className="meat-items">
        {data.map((item) => (
          <Meatform
            key={ item.name }
            name={ item.name }
            image={ item.image }
            checkbox={ checkboxState[item.name] }
            onCheckboxChange={ onCheckboxChange }
          />
        ))}
      </div>
    </div>
  );
}

export default MeatformList;
