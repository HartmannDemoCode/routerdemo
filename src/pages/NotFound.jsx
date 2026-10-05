import {useParams} from 'react-router'
export default function NotFound() {
    const params = useParams();
    const urlpath = params["*"];

  return (
    <>
      <h4>Den side: /{urlpath} du forsøger at finde er her ikke</h4>
    </>
  );
}
