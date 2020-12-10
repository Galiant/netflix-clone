/*eslint-disable react/prop-types*/
/*eslint-disable no-unused-vars*/
import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Header, Loading } from '../components';

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src='joker1'>
        <Header.Feature>
          <Header.FeatureText>Watch Joker Now</Header.FeatureText>
          <Header.Text>
            Joker is a 2019 American psychological thriller film directed and
            produced by Todd Phillips, who co-wrote the screenplay with Scott
            Silver. The film, based on DC Comics characters, stars Joaquin
            Phoenix as the Joker and provides an alternative origin story for
            the character.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
