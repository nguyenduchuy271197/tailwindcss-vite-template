export default function ReviewCard({ name, position, imageUrl, content }) {
  return (
    <div className="p-4 bg-gray-100 rounded-xl">
      <div className="flex gap-4">
        <div>
          <img
            src={imageUrl}
            alt=""
            className="object-cover object-top rounded-full w-14 h-14"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm mt-0.5">{position}</p>
        </div>
      </div>
      <div className="mt-6 text-blue-600">{content}</div>
    </div>
  );
}
