# exit with error status code if user is not root
if [[ $EUID -ne 0 ]]; then
  echo "* This script must be executed with root privileges (sudo)." 1>&2
  exit 1
fi

# check for curl
if ! [ -x "$(command -v curl)" ]; then
  echo "* curl is required in order for this script to work."
  echo "* install using apt (Debian and derivatives) or yum/dnf (CentOS)"
  exit 1
fi

echo -n "Do you want to install pterodaxyl-theme? y/n "
read answer
if [ "$answer" != "${answer#[Yy]}" ] ;then
	echo Yes
else
	exit
fi
	
php /var/www/pterodactyl/artisan down
cd /var/www/pterodactyl
DIR="/var/www/pterodactyl/backup"
if [ -d "$DIR" ]; then
echo -n "$DIR' There already is a backup do you want to create a new one? y/n "
read answer

# if echo "$answer" | grep -iq "^y" ;then

if [ "$answer" != "${answer#[Yy]}" ] ;then # this grammar (the #[] operator) means that the variable $answer where any Y or y in 1st position will be dropped if they exist.
    echo Yes
rm -r backup/*
mkdir -p backup/{resources,public}
   cp -r resources/* backup/resources/
   cp -r public/* backup/public/
   cp tailwind.config.js backup/
   echo "Backup created."
else
    echo No
fi

else
   echo "No backup found, creating one.."
   mkdir -p backup/{resources,public}
   cp -r resources/* backup/resources/
   cp -r public/* backup/public/
   cp tailwind.config.js backup/
   echo "Backup created."
fi

sudo curl https://raw.githubusercontent.com/beastksoepic/pterodaxyl-theme/main/pterodaxyl-theme.tar.gz | sudo tar -xz
#clear
cd /var/www/pterodactyl

if [ `which yum` ]; then
  if ! command -v node -v &> /dev/null
  then
    curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
    yum install nodejs
  fi
elif [ `which apt` ]; then
  if ! command -v node -v &> /dev/null
  then
    curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    apt-get install -y nodejs
  fi
else
   echo "Your OS is not supported!"
fi

if ! command -v yarn -v &> /dev/null
then
    npm i -g yarn
fi
yarn install
yarn build:production
#clear
php /var/www/pterodactyl/artisan up
echo "pterodaxyl-theme is now installed!"
echo "copyright (c) 2022 beastksoepic"
