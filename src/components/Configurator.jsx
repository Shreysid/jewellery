import { useCustomization } from "../Contexts/Customization";

const Configurator = () => {
  const { material, setMaterial } = useCustomization();

  return (
    <div className="configurator">
      <div className="configurator_section">
        <div className="configurator_section_material">Make Your own Ring</div>
        <div className="configurator_section_value">
          <div className="items">
            Sieze the moment
            <div
              className={`item ${material === "diamond" ? "item-active" : ""}`}
              onClick={() => setMaterial("diamond")}
            >
              <div className="item_value">Diamond</div>
            </div>
            <div
              className={`item ${material === "Sapphire" ? "item-active" : ""}`}
              onClick={() => setMaterial("Sapphire")}
            >
              <div className="item_value">Sapphire</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
