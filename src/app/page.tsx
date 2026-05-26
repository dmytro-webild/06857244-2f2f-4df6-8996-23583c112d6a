"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, Brush, Clock, Cloud, EyeOff, Key, Lock, MessageSquare, ShieldCheck, Signal, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmall"
        background="aurora"
        cardStyle="outline"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "Features",          id: "#features"},
        {
          name: "How It Works",          id: "#how-it-works"},
        {
          name: "Metrics",          id: "#metrics"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="ChatPrivately"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated-grid"}}
      title="Chat privately Connect instantly No clutter"
      description="Simple, secure messaging for people who value their time. Start talking in seconds—no signup friction, no tracking."
      buttons={[
        {
          text: "Start Chatting Free",          href: "#contact"},
      ]}
      carouselItems={[
        {
          id: "carousel-item-1",          imageSrc: "http://img.b2bpic.net/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063165.jpg",          imageAlt: "Chat platform desktop interface"},
        {
          id: "carousel-item-2",          imageSrc: "http://img.b2bpic.net/free-photo/password-lock-phone-screen_1387-186.jpg",          imageAlt: "Chat platform tablet interface"},
        {
          id: "carousel-item-3",          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-looking-smartphone_23-2148012921.jpg",          imageAlt: "Chat platform smartphone interface"},
        {
          id: "carousel-item-4",          imageSrc: "http://img.b2bpic.net/free-photo/team-meeting-online-conference-call_23-2148890421.jpg",          imageAlt: "Chat platform video call feature"},
        {
          id: "carousel-item-5",          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-mobile-phone-snap-taking-photo_53876-13980.jpg",          imageAlt: "User interacting with chat app on smartphone"},
        {
          id: "carousel-item-6",          imageSrc: "http://img.b2bpic.net/free-photo/expertise-technology-indoors-intelligence-phone_1301-127.jpg",          imageAlt: "Minimalist workspace with chat platform on laptop"},
      ]}
      autoPlay={true}
      autoPlayInterval={4000}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Your Privacy, Our Priority"
      description="At ChatPrivately, we believe secure communication should be simple and accessible. Our platform is designed from the ground up to protect your conversations with end-to-end encryption, ensuring that your messages remain private and confidential. Experience distraction-free messaging without compromising on security or performance."
      metrics={[
        {
          value: "100%",          title: "Encrypted"},
        {
          value: "Zero",          title: "Data Logging"},
        {
          value: "Always",          title: "Free"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/business-team-boardroom-attend-videocall-meeting-with-investors-group-discussing-about_482257-133177.jpg"
      imageAlt="Professionals collaborating using secure chat platform"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "End-to-End Encryption",          description: "Every message is encrypted from sender to receiver, ensuring only you and your intended recipient can read your conversations.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/excited-hacker-after-breaking-government-server-using-supercomputer_482257-20589.jpg",            imageAlt: "Abstract security graphic"},
          items: [
            {
              icon: Lock,
              text: "Secure by default"},
            {
              icon: ShieldCheck,
              text: "Data protection"},
            {
              icon: Key,
              text: "Private keys"},
          ],
          reverse: false
        },
        {
          title: "Real-time & Reliable Messaging",          description: "Experience instant message delivery and a robust infrastructure designed for uninterrupted conversations, anytime, anywhere.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/christmas-incoming-call-screen-from-santa-claus_169016-40981.jpg",            imageAlt: "Real-time chat interface"},
          items: [
            {
              icon: Zap,
              text: "Instant delivery"},
            {
              icon: Cloud,
              text: "High availability"},
            {
              icon: Signal,
              text: "Stable connection"},
          ],
          reverse: true
        },
        {
          title: "Clean, Distraction-Free Interface",          description: "Focus on your conversations with an intuitive and minimalist design. No clutter, no ads, just pure communication.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/people-working-office_329181-13532.jpg",            imageAlt: "User-friendly chat interface"},
          items: [
            {
              icon: EyeOff,
              text: "No ads"},
            {
              icon: Brush,
              text: "Sleek design"},
            {
              icon: Award,
              text: "Enhanced focus"},
          ],
          reverse: false
        }
      ]}
      title="Core Features for Private Communication"
      description="Discover the powerful tools that make ChatPrivately your go-to platform for secure and effortless messaging."
    />
  </div>

  <div id="how-it-works" data-section="how-it-works">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "hw-1",          brand: "Privacy First",          name: "Advanced Privacy Controls",          price: "Free",          rating: 5,
          reviewCount: "200 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/digital-business-list-app-interface_53876-20972.jpg",          imageAlt: "Chat privacy settings dashboard"},
        {
          id: "hw-2",          brand: "Seamless Setup",          name: "Zero-Friction Onboarding",          price: "Free",          rating: 5,
          reviewCount: "150 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150104494.jpg",          imageAlt: "Seamless onboarding illustration"},
        {
          id: "hw-3",          brand: "Universal Access",          name: "Cross-Device Sync",          price: "Free",          rating: 5,
          reviewCount: "300 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/realistic-phone-studio-social-media-concept_23-2151459576.jpg",          imageAlt: "Cross-device compatibility"},
        {
          id: "hw-4",          brand: "Focused Conversations",          name: "Distraction-Free Mode",          price: "Free",          rating: 5,
          reviewCount: "180 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-education-day-concept-with-copy-space_23-2148779746.jpg",          imageAlt: "Distraction-free chat mode"},
        {
          id: "hw-5",          brand: "Always On",          name: "Reliable Global Infrastructure",          price: "Free",          rating: 5,
          reviewCount: "250 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/graph-data-show-summary-analysis-icon-graphic_53876-128061.jpg",          imageAlt: "Secure data center illustration"},
        {
          id: "hw-6",          brand: "Confidential Sharing",          name: "Secure File Transfer",          price: "Free",          rating: 5,
          reviewCount: "120 reviews",          imageSrc: "http://img.b2bpic.net/free-vector/purchase-online-onboarding-app-screens_23-2148403500.jpg",          imageAlt: "Secure file sharing within chat"},
      ]}
      title="How ChatPrivately Ensures Your Digital Security"
      description="Our commitment to privacy and performance is built into every aspect of the platform. Here’s how we achieve it."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "metric-1",          icon: Users,
          title: "Active Users",          value: "250K+"},
        {
          id: "metric-2",          icon: MessageSquare,
          title: "Messages Sent Daily",          value: "1M+"},
        {
          id: "metric-3",          icon: ShieldCheck,
          title: "Encrypted Chats",          value: "100%"},
        {
          id: "metric-4",          icon: Clock,
          title: "Uptime",          value: "99.9%"},
      ]}
      title="Our Impact: Building a More Private Digital World"
      description="Join thousands of professionals and individuals who trust ChatPrivately for their secure messaging needs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          handle: "@sarah_j",          testimonial: "ChatPrivately is a game-changer for my remote team. The clean interface means no distractions, and the privacy features give us peace of mind. Highly recommended for professionals!",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-business-woman-looking-up-copy-space_1262-3088.jpg",          imageAlt: "Sarah J. profile picture"},
        {
          id: "2",          name: "Michael C.",          handle: "@mike_dev",          testimonial: "Finally, a messaging app that respects my data. The performance is solid, and I love the focus on essential features without the bloat. It's my go-to for secure conversations.",          imageSrc: "http://img.b2bpic.net/free-photo/executive-assistant-multinational-company-work-big-business-project_482257-113916.jpg",          imageAlt: "Michael C. profile picture"},
        {
          id: "3",          name: "Emily R.",          handle: "@emily_mkt",          testimonial: "As a marketing director, clear and secure communication is vital. ChatPrivately delivers on both fronts. It's incredibly user-friendly and keeps our sensitive discussions safe.",          imageSrc: "http://img.b2bpic.net/free-photo/this-is-success-my-hands_329181-13489.jpg",          imageAlt: "Emily R. profile picture"},
        {
          id: "4",          name: "David K.",          handle: "@davidk_pm",          testimonial: "I appreciate the transparency and reliability of ChatPrivately. It's been an excellent tool for managing sensitive project discussions with external partners.",          imageSrc: "http://img.b2bpic.net/free-photo/company-executives-analyzing-discussing-reports-two-business-colleagues-sitting-together-looking-document-holding-tablet-talking-wide-shot-communication-concept_74855-11618.jpg",          imageAlt: "David K. profile picture"},
        {
          id: "5",          name: "Jessica L.",          handle: "@jess_biz",          testimonial: "Simple, secure, and effective. ChatPrivately has replaced all my other messaging apps for one-on-one professional chats. The privacy features are top-notch!",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-with-olives-beer_23-2147680964.jpg",          imageAlt: "Jessica L. profile picture"},
        {
          id: "6",          name: "Alex B.",          handle: "@alex_tech",          testimonial: "Fast, private, and no unnecessary features. This is exactly what I needed for focused digital communication. A truly refreshing experience.",          imageSrc: "http://img.b2bpic.net/free-photo/people-room-man-entering_23-2147656727.jpg",          imageAlt: "Alex B. profile picture"},
      ]}
      title="What Our Users Are Saying"
      description="Hear from professionals and privacy advocates who rely on ChatPrivately every day."
      speed={40}
      topMarqueeDirection="left"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",          title: "Is ChatPrivately truly free to use?",          content: "Yes, ChatPrivately is completely free for individual use. We believe everyone deserves access to secure and private communication without hidden costs."},
        {
          id: "faq-2",          title: "How does end-to-end encryption work?",          content: "Our platform uses industry-standard end-to-end encryption protocols, meaning only the sender and intended recipient can read messages. Not even ChatPrivately can access your conversations."},
        {
          id: "faq-3",          title: "Do you log any user data or message content?",          content: "Absolutely not. We have a strict zero-logging policy for message content and sensitive user data. Your privacy is paramount."},
        {
          id: "faq-4",          title: "Can I use ChatPrivately on multiple devices?",          content: "Yes, ChatPrivately supports seamless syncing across multiple devices, including desktop, tablet, and mobile, allowing you to pick up conversations wherever you left off."},
        {
          id: "faq-5",          title: "What makes ChatPrivately different from other messaging apps?",          content: "We focus on a distraction-free, clean interface combined with robust, transparent privacy features, offering a secure alternative to mainstream apps without feature bloat or intrusive tracking."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-it-professional-using-tablet-building-ai-algorithms_482257-100475.jpg"
      imageAlt="Person looking at FAQ section on screen"
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about ChatPrivately's features, security, and usage."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient"}}
      text="Ready to experience truly private and seamless communication? Join ChatPrivately today!"
      buttons={[
        {
          text: "Get Started Now",          href: "#"},
        {
          text: "Learn More",          href: "#about"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Product",          items: [
            {
              label: "Features",              href: "#features"},
            {
              label: "How It Works",              href: "#how-it-works"},
            {
              label: "Security",              href: "#about"},
            {
              label: "Pricing",              href: "#"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Careers",              href: "#"},
            {
              label: "Blog",              href: "#"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
            {
              label: "Cookie Policy",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 ChatPrivately. All rights reserved."
      bottomRightText="Built with privacy in mind."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
