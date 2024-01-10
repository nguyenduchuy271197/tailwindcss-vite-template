import ReviewCard from "./components/ReviewCard";
import TodoItem from "./components/TodoItem";

export default function App() {
  const todoItems = [
    {
      id: "1",
      content: "Learn JS",
      isComplete: true,
    },
    {
      id: "2",
      content: "Learn HTML",
      isComplete: true,
    },
    {
      id: "3",
      content: "Learn CSS",
      isComplete: true,
    },
    {
      id: "4",
      content: "Learn React",
      isComplete: false,
    },
  ];

  return (
    <div>
      <div className="max-w-screen-xl px-8 mx-auto">
        <div className="grid gap-6 pt-16 sm:grid-cols-2 lg:grid-cols-3">
          <ReviewCard
            name="Jonathen tapas"
            position="Founder of saleMore"
            imageUrl="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjonathan.49b041d4.webp&w=3840&q=75"
            content="Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy...gotta love that."
          />
          <ReviewCard
            name="Rahole titane"
            position="Team leader"
            imageUrl="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frahole.23313e3c.webp&w=3840&q=75"
            content="I've been using Starboard for a couple of months now and it has really helped me with my project management skills.It's perfect for anyone who prefers the simpler route in life."
          />
          <ReviewCard
            name="Joric toral"
            position="IT manager"
            imageUrl="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjoric.9795b86c.webp&w=3840&q=75"
            content="We're using Starboard to manage our entire project, and it's been truly incredible! From the way it's easy to create new tasks and organize your team."
          />
          <ReviewCard
            name="Alexandru"
            position="Project manager"
            imageUrl="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falexandru.a3d3c922.webp&w=3840&q=75"
            content="I am a project manager and I have used a number of different project management software. Spent over $100,000 on tools that frankly did not work for me."
          />
          <ReviewCard
            name="Lyna igore"
            position="CTO of bankLine"
            imageUrl="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flyna.1c2d779e.webp&w=3840&q=75"
            content="I have had the opportunity to work with Starboard on a number of projects and it's been one of the best experiences I have had, so I highly recommend this software."
          />
          <ReviewCard
            name="Tony justin"
            position="IT manager"
            imageUrl="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftony.18628255.webp&w=3840&q=75"
            content="I started as a project manager and now help plan out all our marketing campaigns. The thing that really keeps me coming back is their support."
          />
        </div>
      </div>

      <div className="max-w-screen-xl px-8 mx-auto">
        <div className="flex flex-col gap-4 py-16">
          {todoItems.map((item) => (
            <TodoItem
              content={item.content}
              isComplete={item.isComplete}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
