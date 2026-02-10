// import { ContactForm } from "@/components/ContactForm";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Contact() {
//   return (
//     <section className="pt-10 pb-20 min-h-[60vh] w-full max-w-full">
//       {/* <div className="w-full max-w-5xl mx-auto"> */}
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-foreground tracking-tight">Contact</h1>
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-muted-foreground tracking-tight">
//           Get in touch before I write another line of code!
//         </h2>
//         <Tabs defaultValue="form" className="w-full bg-neutral-500">
//           <TabsList className="w-full mb-6 bg-neutral-800">
//             <TabsTrigger value="form" className="flex-1">Form</TabsTrigger>
//             <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
//           </TabsList>
//           <TabsContent value="form">
//             <Card className="w-full shadow-lg border border-border">
//               <CardContent className="p-8">
//                 <ContactForm />
//               </CardContent>
//             </Card>
//           </TabsContent>
//           <TabsContent value="details">
//             <Card className="w-full shadow-lg border border-border">
//               <CardContent className="p-8">
//                 <div className="mb-4 font-bold text-lg text-foreground">contact.ts</div>
//                 <pre className="bg-zinc-900 rounded-lg p-4 text-sm text-zinc-200 overflow-x-auto border border-zinc-800 w-full">
//                   <code>{`const contactDetails = {
//   name: "Abdi Sileshi",
//   email: "abdisileshi123@gmail.com",
//   mobile: "+251-912345678",
//   location: "Addis Ababa, Ethiopia",
//   linkedIn: "linkedin.com/in/abdi-sileshi-56710a2a6",
//   github: "github.com/Ketoransile",
// };

// function reachOut() {
//   console.log(
//     'Reach out to me via email at ' + contactDetails.email + ' or connect on LinkedIn: ' + contactDetails.linkedIn
//   );
// }

// reachOut();`}</code>
//                 </pre>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       {/* </div> */}
//       <div className="flex justify-between items-center mt-8">
//         <a href="/education" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold text-lg">&lt; Education</a>
//         <div></div>
//       </div>
//     </section>
//   );
// }
// import { ContactForm } from "@/components/ContactForm";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Contact() {
//   return (
//     <section className="pt-10 pb-20 min-h-[60vh] w-full max-w-full">
//       <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-foreground tracking-tight">Contact</h1>
//       <h2 className="text-3xl md:text-4xl font-bold mb-10 text-muted-foreground tracking-tight">
//         Get in touch before I write another line of code!
//       </h2>

//       <Tabs defaultValue="form" className="w-full">
//         <TabsList className="w-full h-14 mb-6 bg-background border border-border rounded-lg p-1 grid grid-cols-2">
//           <TabsTrigger
//             value="form"
//             className="relative z-10 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=active]:text-foreground data-[state=active]:shadow-sm h-full"
//           >
//             <span className="z-30 relative">Contact Form</span>
//           </TabsTrigger>
//           <TabsTrigger
//             value="details"
//             className="relative z-10 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=active]:text-foreground data-[state=active]:shadow-sm h-full"
//           >
//             <span className="z-30 relative">My Details</span>
//           </TabsTrigger>
//         </TabsList>

//         <TabsContent value="form" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg">
//           <Card className="w-full shadow-lg border border-border transition-all hover:shadow-xl">
//             <CardContent className="p-6 md:p-8">
//               <ContactForm />
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="details" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg">
//           <Card className="w-full shadow-lg border border-border transition-all hover:shadow-xl">
//             <CardContent className="p-6 md:p-8">
//               <div className="mb-4 font-bold text-lg text-foreground">contact.ts</div>
//               <pre className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg p-6 text-sm text-zinc-200 overflow-x-auto border border-zinc-800 w-full">
//                 <code>{`const contactDetails = {
//   name: "Abdi Sileshi",
//   email: "abdisileshi123@gmail.com",
//   mobile: "+251-912345678",
//   location: "Addis Ababa, Ethiopia",
//   linkedIn: "linkedin.com/in/abdi-sileshi-56710a2a6",
//   github: "github.com/Ketoransile",
// };

// function reachOut() {
//   console.log(
//     'Reach out to me via email at ' + contactDetails.email +
//     ' or connect on LinkedIn: ' + contactDetails.linkedIn
//   );
// }

// reachOut();`}</code>
//               </pre>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>

//       <div className="flex justify-between items-center mt-8">
//         <a href="/education" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold text-lg">&lt; Education</a>
//         <div></div>
//       </div>
//     </section>
//   );
// }

import { ContactForm } from "@/components/ContactForm";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Contact() {
  const codeString = `const contactDetails = {
  name: "Abdi Sileshi Worku",
  email: "abdisileshi123@gmail.com",
  mobile: "+251-988734632",
  location: "Addis Ababa, Ethiopia",
  linkedIn: "linkedin.com/in/abdi-sileshi-56710a2a6",
  github: "github.com/Ketoransile",
};

function reachOut() {
  console.log(
    'Reach out to me via email at ' + contactDetails.email + 
    ' or connect on LinkedIn: ' + contactDetails.linkedIn
  );
}

reachOut();`;

  return (
    <section className="pt-10 pb-20 min-h-[60vh] w-full max-w-full">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 tracking-tight">
        Contact
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-neutral-400 tracking-tight">
        Get in touch before{" "}
        <span className="text-blue-400">I write another line of code!</span>
      </h2>

      <Tabs defaultValue="form" className="w-full">
        <TabsList className="w-full h-auto min-h-14 mb-8 bg-neutral-900 border border-neutral-800 rounded-xl p-1 grid grid-cols-2 gap-2 relative">
          {/* Active tab style is handled by radix but we style the triggers */}
          <TabsTrigger
            value="form"
            className="rounded-lg py-3 transition-all data-[state=active]:bg-neutral-800 data-[state=active]:text-white text-neutral-400 font-medium hover:text-white"
          >
            Contact Form
          </TabsTrigger>
          <TabsTrigger
            value="details"
            className="rounded-lg py-3 transition-all data-[state=active]:bg-neutral-800 data-[state=active]:text-white text-neutral-400 font-medium hover:text-white"
          >
            My Details
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="form"
          className="focus-visible:outline-none focus:outline-none"
        >
          <Card className="w-full shadow-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardContent className="p-6 md:p-10">
              <ContactForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          value="details"
          className="focus-visible:outline-none focus:outline-none"
        >
          <Card className="w-full shadow-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardContent className="p-6 md:p-10">
              <div className="mb-4 font-mono text-sm text-neutral-400 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="ml-2">contact.ts</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-neutral-800 shadow-xl">
                <SyntaxHighlighter
                  language="javascript"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: "1.5rem",
                    background: "#0a0a0a",
                  }}
                  showLineNumbers={true}
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between items-center mt-16 pt-8 border-t border-neutral-800">
        <a
          href="/education"
          className="flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors font-medium text-lg group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">
            &lt;
          </span>{" "}
          Education
        </a>
        <div></div>
      </div>
    </section>
  );
}
