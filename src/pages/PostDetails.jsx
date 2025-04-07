import PostSingleDetails from '../components/postDetails/PostSingleDetails';
import LetConnect from '../components/generalSections/LetConnect';
import Subscribe from '../components/Subscribe';
import TheNews from '../components/generalSections/TheNews';

export default function PostDetails() {
  return (
    <div className="">
      <PostSingleDetails />
      <TheNews />
      <LetConnect />
      <Subscribe />
    </div>
  );
}
