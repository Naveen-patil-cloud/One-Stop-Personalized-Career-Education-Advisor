import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';

interface VideoModalProps {
  onClose: () => void;
}

const loadingMessages = [
    "Crafting your story...",
    "Warming up the pixels...",
    "Choreographing the scenes...",
    "Rendering the introduction...",
    "Adding the final touches...",
];

const VideoModal: React.FC<VideoModalProps> = ({ onClose }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);
    const isGenerating = useRef(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingMessage(prev => {
                const currentIndex = loadingMessages.indexOf(prev);
                const nextIndex = (currentIndex + 1) % loadingMessages.length;
                return loadingMessages[nextIndex];
            });
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const generateVideo = async () => {
            if (isGenerating.current) return;
            isGenerating.current = true;

            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const prompt = "An animated promotional video. It starts with a confused high-school student overwhelmed by a chaotic collage of career options. A bright, modern app interface for 'Career & Education Advisor' appears, bringing clarity. Quick cuts show a student taking an aptitude quiz, an animated career map branching out, scrolling through a list of colleges with beautiful campus photos, and a personalized AI dashboard with recommendations. The video ends with the logo and the tagline 'Find Your Future, Today.' The style is clean, optimistic, and uses smooth transitions.";

                let operation = await ai.models.generateVideos({
                    model: 'veo-2.0-generate-001',
                    prompt: prompt,
                    config: { numberOfVideos: 1 }
                });

                while (!operation.done) {
                    await new Promise(resolve => setTimeout(resolve, 10000));
                    operation = await ai.operations.getVideosOperation({ operation: operation });
                }

                const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
                if (downloadLink) {
                    const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
                    const blob = await response.blob();
                    const url = URL.createObjectURL(blob);
                    setVideoUrl(url);
                } else {
                    throw new Error("Video generation completed, but no download link was found.");
                }

            } catch (err) {
                console.error("Error generating video:", err);
                setError("Sorry, we couldn't create the video right now. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        generateVideo();
    }, []);

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className="relative w-full max-w-3xl bg-slate-800 rounded-lg shadow-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center bg-black/30 text-white rounded-full hover:bg-black/60 transition-colors"
                  aria-label="Close video player"
                >
                  <i className="fa-solid fa-times"></i>
                </button>
                
                <div className="aspect-video w-full flex items-center justify-center bg-black">
                    {isLoading && (
                        <div className="text-center text-white">
                            <i className="fa-solid fa-film text-4xl animate-pulse"></i>
                            <p className="mt-4 font-semibold">{loadingMessage}</p>
                            <p className="text-sm text-slate-400">This may take a minute or two.</p>
                        </div>
                    )}
                    {error && (
                        <div className="text-center text-red-400 px-4">
                            <i className="fa-solid fa-circle-exclamation text-4xl"></i>
                            <p className="mt-4 font-semibold">Generation Failed</p>
                            <p className="text-sm">{error}</p>
                        </div>
                    )}
                    {!isLoading && videoUrl && (
                        <video 
                            src={videoUrl} 
                            className="w-full h-full"
                            controls 
                            autoPlay 
                            onEnded={onClose}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
