import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export function Marketing() {
  return (
    <div className="min-h-svh">
      <div className="max-w-6xl mx-auto">
        <header>
          <nav className="flex items-center justify-between pt-2.5">
            <div className="flex items-center gap-x-3">
              <img src="/logo.svg" alt="logo" className="size-9" />{" "}
              <span>Fitdash</span>
            </div>
            <div>
              <div>
                <Link to="/sign-in">
                  <Button>Log In</Button>
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <section className="mt-14">
          <div className="space-y-2.5">
            <h1 className="text-4xl">
              Take control of your health, form lasting healthy habits
            </h1>
            <p className="text-balance">
              Build a healthier lifestyle with small, consistent steps. Our
              tools guide you to set clear goals, track progress, and stay
              motivated—so you can create habits that last and take charge of
              your well-being.
            </p>
            <div>
              <Link to="/sign-up">
                <Button variant="secondary">Get started</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
