import * as os from "os";
import * as path from "path";

export const TMP_DIR = os.homedir();
export const APP_TMP_DIR = path.join(TMP_DIR, ".fortify");

export const APP_DIR = path.join(__dirname, "..");
export const SRC_DIR = path.join(APP_DIR, "src");
export const RESOURCES_DIR = path.join(SRC_DIR, "resources");
export const HTML_DIR = path.join(SRC_DIR, "htmls");
export const ICON_DIR = path.join(SRC_DIR, "icons");

export const APP_LOG_FILE = path.join(APP_TMP_DIR, `fortify.log`);
export const APP_CONFIG_FILE = path.join(APP_TMP_DIR, `config.json`);
export const APP_SSL_CERT_CA = path.join(APP_TMP_DIR, `ca.pem`);
export const APP_SSL_CERT = path.join(APP_TMP_DIR, `cert.pem`);
export const APP_SSL_KEY = path.join(APP_TMP_DIR, `key.pem`);
export const APP_CARD_JSON = path.join(APP_TMP_DIR, `card.json`);
export const APP_CARD_JSON_LINK = "https://fortifyapp.com/packages/card.jws";

export const TEMPLATE_NEW_CARD_FILE = path.join(RESOURCES_DIR, `new_card.tmpl`);

export const JWS_LINK = "https://fortifyapp.com/packages/update.jws";
export const DOWNLOAD_LINK = "https://fortifyapp.com/#download_app";
export const SUPPORT_NEW_TOKEN_LINK = "https://github.com/PeculiarVentures/fortify";
export const CHECK_UPDATE = true;
export const CHECK_UPDATE_INTERVAL = 24 * 60 * 60e3; // 24h

export const icons = {
    tray: path.join(ICON_DIR, "tray", "iconTemplate.png"),
    trayWhite: path.join(ICON_DIR, "tray", "iconPressedTemplate.png"),
    favicon: path.join(ICON_DIR, "favicon-32x32.png"),
};

switch (os.platform()) {
    case "win32":
        icons.tray = path.join(ICON_DIR, "favicon-32x32.png");
        break;
    case "linux":
        icons.tray = path.join(ICON_DIR, "tray", "iconPressedTemplate@2x.png");
        break;
}
