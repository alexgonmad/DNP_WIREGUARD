export const params = {
  MASTER_ADMIN: "dappnode_admin",
  DAPPNODE_API_URLS_GET_INTERNAL_IP: [
    "http://my.dappnode/global-envs/INTERNAL_IP",
    "http://dappmanager.dappnode/global-envs/INTERNAL_IP",
    "http://172.33.1.7/global-envs/INTERNAL_IP"
  ],
  SERVER_PORT: 51820,
  DATA_DIR: process.env.DATA_DIR || "/config",
  HELP_MESSAGE:
    "Get your wireguard credentials. Command: dappnode_wireguard\n\n--qr   =>  will return credentials in QR format. Default are plain text\n--local  =>  return local credentials to solve NAT loopback issues. Default are remote credentials\n--help  =>  print out this message",
};
