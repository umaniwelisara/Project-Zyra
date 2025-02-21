import Switch from "./Switch";
import IconButton from "./IconButton";
import VerticalLine from "./VerticalLine";
import styles from "./SettingsBar.module.css";
import { useContext } from "react";
import AgeGroupContext from "../context/AgeGroupContext";

const SettingsBar = () => {
  const { ageGroup, updateAgeGroup } = useContext(AgeGroupContext);

  const isYouthful = ageGroup === "youthful";

  const handleSwitchChange = (newState) => {
    const newAgeGroup = newState ? "youthful" : "graceful";
    updateAgeGroup(newAgeGroup);
  };

  return (
    <section className={styles.settings}>
      <div className={styles.settingsSection}>
        <span className={styles.personalizeTitle}>Personalize</span>
        <Switch
          isOn={!isYouthful}
          onText="Youthful"
          offText="Graceful"
          onChange={handleSwitchChange}
        />
        <VerticalLine />
        <Switch isOn={false} onText="Show Ads" offText="No Ads" />
      </div>

      <div className={styles.settingsSection}>
        {!isYouthful && (
          <>
            <IconButton
              iconUrl="/change-text.svg"
              label="Contrast"
              size="WIDE"
            />
            <VerticalLine />
            <IconButton
              iconUrl="/change-text.svg"
              label="Change Text"
              size="WIDE"
            />
            <VerticalLine />
          </>
        )}

        <IconButton iconUrl="/dark-mode.svg" label="Dark Mode" />
        <VerticalLine />
        <IconButton iconUrl="/language.svg" label="Language" />
      </div>
    </section>
  );
};

export default SettingsBar;
