import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: index,
});

function index() {
  return <div>Hello "/"!</div>;
}
