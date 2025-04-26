
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

export default function Framework() {
  const [currentStep, setCurrentStep] = useState(1);
  const [enhanceWithAI, setEnhanceWithAI] = useState(false);

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  const frameworks = [
    {
      name: "Foundational",
      tag: "Core",
      tagColor: "bg-lime-300 text-zinc-900",
      reviewed: false,
    },
    {
      name: "Research & Inspiration",
      tag: "Core",
      tagColor: "bg-teal-300 text-zinc-900",
      reviewed: false,
    },
    {
      name: "Ethics & Boundaries",
      tag: "Core",
      tagColor: "bg-[#FFEFBB] text-zinc-900",
      reviewed: false,
    },
    {
      name: "Model Behaviour",
      tag: "Core",
      tagColor: "bg-[#FFD54C] text-zinc-900",
      reviewed: false,
    },
    {
      name: "Iteration & impact",
      tag: "Flexible",
      tagColor: "bg-indigo-400 text-neutral-50",
      reviewed: false,
    },
    {
      name: "Final Review",
      tag: "Core",
      tagColor: "bg-zinc-300 text-zinc-900",
      reviewed: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-1 px-8 py-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-zinc-950">Overview</h1>
            <p className="text-zinc-700 mt-1">
              Manage your project key decisions and set your preferences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="relative min-w-[220px]">
              <button className="w-full flex items-center justify-between bg-white border border-zinc-200 rounded-md px-4 py-2 text-sm text-zinc-800">
                <span>Quick mode</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>
            </div>

            <div className="relative min-w-[220px]">
              <button className="w-full flex items-center justify-between bg-white border border-zinc-200 rounded-md px-4 py-2 text-sm text-zinc-800">
                <span>Select compliance</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_1.2fr] gap-6">
            {/* Left column - Framework list */}
            <div>
              {frameworks.map((framework, index) => (
                <div key={index} className="mb-3 border border-zinc-200 rounded-md">
                  <div className="flex items-center justify-between p-4">
                    <span className="text-zinc-900 font-medium">{framework.name}</span>
                    <div className="flex items-center gap-2">
                      <span className={`${framework.tagColor} text-xs px-3 py-1 rounded-md`}>
                        {framework.tag}
                      </span>
                      <span className="bg-zinc-100 text-zinc-800 text-xs px-3 py-1 rounded-md">
                        Not reviewed
                      </span>
                      <button className="text-zinc-500">
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column - Current step */}
            <Card className="p-0 border-zinc-200">
              <div className="flex bg-zinc-50 border-b border-zinc-200 p-0">
                {[1, 2, 3, 4].map((step) => (
                  <button
                    key={step}
                    className={`flex-1 py-3 text-center text-sm font-medium ${
                      currentStep === step
                        ? "bg-lime-300 text-zinc-900"
                        : "bg-zinc-50 text-zinc-700"
                    }`}
                    onClick={() => handleStepChange(step)}
                  >
                    Step {step}
                  </button>
                ))}
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Step 1: Define the Problem or Purpose
                </h2>
                <p className="text-sm text-zinc-600 mb-2">
                  Why are we building this? (maximum 80 characters)
                </p>
                <Textarea 
                  placeholder="e.g: Summarising policy documents with an LLM trained on legal texts"
                  className="mb-4 min-h-[100px]"
                />

                <div className="flex items-center gap-2 mb-6">
                  <div 
                    className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${enhanceWithAI ? 'bg-blue-500' : 'bg-zinc-200'}`}
                    onClick={() => setEnhanceWithAI(!enhanceWithAI)}
                  >
                    <div 
                      className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transform transition-transform duration-200 ${
                        enhanceWithAI ? 'translate-x-6' : ''
                      }`}
                    />
                  </div>
                  <span className="text-sm text-zinc-700">Enhance with AI</span>
                </div>

                <div className="border-t border-zinc-200 pt-6 mb-6">
                  <p className="text-sm text-zinc-700">
                    Want to start a discussion with the team? Invite them to a
                    workshop in <Link to="#" className="text-blue-600 underline">Miro</Link> or Start a #thread in <Link to="#" className="text-blue-600 underline">Slack</Link>
                  </p>
                </div>

                <div className="flex gap-3 mb-6">
                  <Button variant="outline" className="flex-1 border-zinc-200 gap-2">
                    <span className="bg-yellow-300 rounded-sm w-5 h-5 flex items-center justify-center text-xs">M</span>
                    Host a Miro Workshop
                  </Button>
                  <Button variant="outline" className="flex-1 border-zinc-200 gap-2">
                    <span className="bg-blue-500 rounded-sm w-5 h-5 flex items-center justify-center text-xs text-white">#</span>
                    Start a #thread in Slack
                  </Button>
                </div>

                <div className="flex justify-end gap-3">
                  <Button variant="outline" className="border-zinc-200">
                    Cancel
                  </Button>
                  <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                    Next step
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
