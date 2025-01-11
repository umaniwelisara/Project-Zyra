import Switch from "./Switch";
import IconButton from "./IconButton";
import VerticalLine from "./VerticalLine";
import styles from "./SettingsBar.module.css";

const SettingsBar = () => {
  const handleSwitchChange = (newState, onValue, offValue) => {
    if (newState) {
      console.log(onValue);
    } else {
      console.log(offValue);
    }
  };

  return (
    <section className={styles.settings}>
      <div className={styles.settingsSection}>
        <span className={styles.personalizeTitle}>Personalize</span>
        <Switch
          onText="Youthful"
          offText="Graceful"
          onChange={(newState) =>
            handleSwitchChange(newState, "graceful", "youthful")
          }
        />
        <VerticalLine />
        <Switch
          onText="Show Ads"
          offText="No Ads"
          onChange={(newState) =>
            handleSwitchChange(newState, "no-ads", "show-ads")
          }
        />
      </div>

      <div className={styles.settingsSection}>
        <IconButton iconUrl="/dark-mode.svg" label="Dark Mode" />
        <VerticalLine />
        <IconButton iconUrl="/language.svg" label="Language" />
      </div>
    </section>
  );
};

export default SettingsBar;
