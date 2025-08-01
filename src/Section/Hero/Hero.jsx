import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../../Components/HackerRoom/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../../Components/CanvasLoader/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../../Constants/index";
import Target from "../../Components/Target/Target";
import ReactLogo from "../../Components/ReactLogo/ReactLogo";
import Cube from "../../Components/Cube/Cube";
import HeroCamera from "../../Components/HeroCamera/HeroCamera";
import Button from "../../Components/Button/Button";

function Hero() {
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	return (
		<section className="min-h-screen w-full flex flex-col relative" id="home">
			<div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
				<p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
					Hi, My name is Adham<span className="waving-hand">👋</span>
				</p>
				<p className="hero_tag text-gray_gradient">
					Feeling happy to see you here
				</p>
			</div>

			<div className="w-full h-full absolute inset-0">
				{/* <Leva /> */}
				<Canvas className="w-full h-full">
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera makeDefault position={[0, 0, 20]} />
						<HeroCamera isMobile={isMobile}>
							<HackerRoom
								// scale={0.07}
								// position={[0, 0, 0]}
								// rotation={[0, 280, 0]}
								position={sizes.deskPosition}
								rotation={[0, Math.PI, 0]}
								scale={sizes.deskScale}
							/>
						</HeroCamera>
						<group>
							<Target position={sizes.targetPosition} />
							<ReactLogo position={sizes.reactLogoPosition} />
							<Cube position={sizes.cubePosition} />
						</group>
						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
			</div>
			<div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
				<a href="#about" className="w-fit">
					<Button
						name="Let's Work Together"
						isBeam
						containerClass="sm:w-fit w-full sm:min-w-96"
					/>
				</a>
			</div>
		</section>
	);
}

export default Hero;
