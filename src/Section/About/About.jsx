import Globe from "react-globe.gl";
import Button from "../../Components/Button/Button";
import { useState } from "react";
function About() {
	const [hasCopied, setHasCopied] = useState(false);
	function handleCopy() {
		navigator.clipboard.writeText("My Email");
		setHasCopied(true);
		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	}
	return (
		<section className="c-space my-20" id="about">
			<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container h-full flex flex-col">
						<img
							src="/assets/grid1.png"
							alt="grid-1"
							className="w-full h-[300px] object-cover"
						/>
						<div className="flex flex-col flex-grow justify-between space-y-2">
							<p className="grid-headtext  mb-1">Hi, I am Adham</p>
							<p className="grid-subtext">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Cupiditate accusamus obcaecati sapiente aperiam iure eum,
								repellendus fugit atque magnam, harum, labore reiciendis
								perferendis tempore eveniet ab saepe mollitia illum. Ratione.
							</p>
						</div>
					</div>
				</div>
				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container h-full flex flex-col">
						<img
							src="/assets/grid2.png"
							alt="grid-2"
							className="w-full h-[300px] object-cover"
						/>
						<div className="flex flex-col flex-grow space-y-2">
							<p className="grid-headtext  ">Tech Stack</p>
							<p className="grid-subtext">
								I specialize in Javascript with focus on React ecosystem
							</p>
						</div>
					</div>
				</div>
				<div className="col-span-1">
					<div className="grid-container h-full flex flex-col">
						<div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
							<Globe
								height={326}
								width={326}
								backgroundColor="rgba(0,0,0,0)"
								backgroundImageOpacity={0.5}
								showAtmosphere
								showGraticules
								globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
								bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
							/>
						</div>
						<div className="flex flex-col flex-grow justify-between space-y-2">
							<p className="grid-headtext">
								I work remotely across most timezones
							</p>
							<p className="grid-subtext">
								I am based in egypt, with remote work available
							</p>
							<Button name="Contact Me" isBeam containerClass="w-full mt-10" />
						</div>
					</div>
				</div>
				<div className="xl:col-span-2 xl-row-span-3 ">
					<div className="grid-container h-full flex flex-col">
						<img
							src="/assets/grid3.png"
							alt="grid-3"
							className="w-full h-[300px] object-cover"
						/>
						<div className="flex flex-col flex-grow justify-between space-y-2">
							<p className="grid-headtext">My passion for coding</p>
							<p className="grid-subtext">
								I Love Building websites, and communicate with people.
							</p>
						</div>
					</div>
				</div>
				<div className="xl:col-span-1 xl:row-span-2">
					<div className="grid-container h-full flex flex-col">
						<img
							src="/assets/grid4.png"
							alt="grid-4"
							className="w-full h-[276px] md:h-[276px] sm:h-[250px] object-contain"
						/>
						<div className="space-y-2">
							<p className="grid-subtext text-center">Contact Me</p>
							<div className="copy-container" onClick={handleCopy}>
								<img
									src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
									alt=""
								/>
								<p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
									My Email
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
