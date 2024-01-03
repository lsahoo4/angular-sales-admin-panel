# To create the script
touch deploy.sh && echo "NETLIFY_TOKEN=nfp_f6bFJKQzF6imMfL4vwqdxRnxsVTvzxkfca39 NETLIFY_API_ID=7ecefb9d-acf3-4307-afc1-735168d780ea ng deploy" >> deploy.sh && chmod +x deploy.sh

# To deploy
./deploy.sh