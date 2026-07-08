import('lucide-react').then(lucide => {
  console.log('GIT:', Object.keys(lucide).filter(k => k.toLowerCase().includes('git')));
  console.log('LINK:', Object.keys(lucide).filter(k => k.toLowerCase().includes('link')));
  console.log('TWIT:', Object.keys(lucide).filter(k => k.toLowerCase().includes('twit')));
});
