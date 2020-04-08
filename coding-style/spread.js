const usernames = ['luc', 'alice', 'john'];
const usernames2 = ['new1', 'alice2', 'john3'];

const usernames3 = [...usernames, ...usernames2];

// console.log('[results] > usernames3: ', usernames3);

const profile = {
  user: { username: 'luc', email: 'luc@ltv.vn' },
  username: 'luc',
  profileImageUrl: 'https://google.com.vn/luc.jpg',
};

const prfExt = { dob: '2000', newbie: true };

const newPrf = { ...profile, ...prfExt };

console.log('newPrf before change `profile`: ', newPrf);

profile.user.username = 'newusername';

console.log('newPrf after change `profile`: ', newPrf);

const newPrf2 = { ...profile, myName: 'my new name' };
console.log('New Prf 2: ', newPrf2);
// Shallow copy
