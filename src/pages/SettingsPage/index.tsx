import { Radio, RadioGroup, Switch, Typography } from '@deliveryhero/armor';
import { ContainerDiv } from './styled';
import { ChangeEvent, useEffect, useState } from 'react';
import { SETTINGS_KEY } from '../../util/constants';
import { Settings, SizeValues } from '../../types/settings';

export const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<Settings>();

  const defaultSettings: Settings = {
    dontShowCats: true,
    size: 'small',
  };

  useEffect(() => {
    const storedSettingsStr = localStorage.getItem(SETTINGS_KEY);
    if (storedSettingsStr) {
      const storedSettingsObj = JSON.parse(storedSettingsStr);
      setSettings(storedSettingsObj);
    } else {
      setSettings(defaultSettings);
      saveSettings(defaultSettings);
    }
  }, []);

  const saveSettings = (newSettings: Settings) => {
    localStorage.setItem(
      SETTINGS_KEY,
      JSON.stringify(newSettings)
    );
  };

  const handleShowCatsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSettings: Settings = { ...settings, dontShowCats: event.target.checked } as Settings;
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target?.value;

    if (selectedValue) {
      const newSettings: Settings = { ...settings, size: selectedValue as SizeValues } as Settings;
      setSettings(newSettings);
      saveSettings(newSettings);
    }
};

  return (
    <ContainerDiv>
      {settings && (
        <>
          <Switch
            label="Don't show the categories"
            checked={settings?.dontShowCats}
            onChange={handleShowCatsChange}
          />

          <Typography>Size</Typography>
          <RadioGroup
            name="size"
            selectedValue={settings?.size}
            onChange={handleSizeChange}
          >
            <Radio value="small">Small</Radio>
            <Radio value="big">Big</Radio>
          </RadioGroup>
        </>
      )}
      </ContainerDiv>
  );
};
