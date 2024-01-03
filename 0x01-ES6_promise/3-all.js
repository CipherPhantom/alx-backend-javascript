import { createUser, uploadPhoto } from './utils';

function handleProfileSignup() {
  uploadPhoto().then((photo) => {
    createUser().then((user) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    });
  }).catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
