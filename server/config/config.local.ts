import { EggAppConfig, PowerPartial } from 'egg';
import path from 'path';

export default () => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.view = {
    root: path.resolve(__dirname, '../../client'),
  };
  return config;
};
