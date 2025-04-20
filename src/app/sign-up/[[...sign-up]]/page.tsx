import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/scene/form.jpg')" }}
    >
      <div className="bg-black/40 absolute inset-0" />
      <div className="relative z-10 bg-white/10 p-8 rounded-lg backdrop-blur-md shadow-xl border border-white/20">
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: "bg-blue-500 hover:bg-blue-600",
              footerActionLink: "text-blue-400 hover:text-blue-500",
              card: "bg-transparent",
              headerTitle: "text-white",
              headerSubtitle: "text-white/80",
              formFieldLabel: "text-white",
              formFieldInput: "bg-white/10 border-white/20 text-white",
              dividerLine: "bg-white/20",
              dividerText: "text-white/60",
              identityPreviewText: "text-white",
              identityPreviewEditButton: "text-blue-400",
              formResendCodeLink: "text-blue-400",
            },
          }}
        />
      </div>
    </div>
  );
}
