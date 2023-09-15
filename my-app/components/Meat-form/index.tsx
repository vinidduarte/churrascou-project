// Meatform.tsx
import './meat-form.css';

type MeatformProps = {
  name: string;
  image: string;
  checkbox: boolean;
  onCheckboxChange: (name: string, isChecked: boolean) => void;
};

function Meatform(props: MeatformProps) {
  const { name, image, checkbox, onCheckboxChange } = props;

  const handleCheckboxChange = () => {
    onCheckboxChange(name, !checkbox);
  };

  return (
    <div className="meat-item">
      {name}
      <img className="meat-image" src={ image } alt={ name } />
      <label>
        <input
          className="input-icon"
          type="checkbox"
          checked={ checkbox }
          onChange={ handleCheckboxChange }
        />
      </label>
    </div>
  );
}

export default Meatform;
