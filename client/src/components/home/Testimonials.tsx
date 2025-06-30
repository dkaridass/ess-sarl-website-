import { useState, useEffect, useRef } from 'react';
import { testimonials } from '@/lib/constants';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block bg-[#F9A826] bg-opacity-10 text-[#F9A826] font-medium px-4 py-1 rounded-full mb-3">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">Hear from the companies we've helped across the Democratic Republic of Congo</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1 p-4">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative mx-2 static translate-y-0 bg-[#F9A826] hover:bg-[#E69215] text-white" />
              <CarouselNext className="relative mx-2 static translate-y-0 bg-[#F9A826] hover:bg-[#E69215] text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

type TestimonialType = {
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
  project: string;
  results: string;
};

function TestimonialCard({ testimonial }: { testimonial: TestimonialType }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-100">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#30B4F2] to-[#1E5631] flex items-center justify-center mr-4 flex-shrink-0">
            <i className="fas fa-user text-white text-xl"></i>
          </div>
          <div>
            <h3 className="font-bold text-xl text-gray-900">{testimonial.name}</h3>
            <p className="text-gray-600 font-medium">{testimonial.position}</p>
            <p className="text-[#30B4F2] font-semibold text-sm">{testimonial.company}</p>
          </div>
        </div>
        <div className="text-[#30B4F2] text-3xl opacity-30">
          <i className="fas fa-quote-right"></i>
        </div>
      </div>

      {/* Quote */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
        "{testimonial.quote}"
      </p>

      {/* Project Details */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Project</p>
            <p className="text-gray-900 font-medium">{testimonial.project}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Results</p>
            <p className="text-[#1E5631] font-bold">{testimonial.results}</p>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center justify-between">
        <div className="flex text-[#F9A826]">
          {Array.from({ length: 5 }).map((_, i) => {
            const fullStar = i < Math.floor(testimonial.rating);
            const halfStar = i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0;

            return (
              <i 
                key={i} 
                className={`fas text-lg ${fullStar ? 'fa-star' : halfStar ? 'fa-star-half-alt' : 'fa-star text-gray-300'}`}
              ></i>
            );
          })}
        </div>
        <span className="text-sm text-gray-500 font-medium">
          {testimonial.rating}/5 Rating
        </span>
      </div>
    </div>
  );
}