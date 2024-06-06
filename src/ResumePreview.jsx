export default function ResumePreview({ personalDetails }) {
  return (
    <>
      <p>{personalDetails.name}</p>
      <p>{personalDetails.email}</p>
      <p>{personalDetails.phoneNumber}</p>
    </>
  );
}
