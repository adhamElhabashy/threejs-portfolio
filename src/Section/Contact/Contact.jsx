function Contact() {
	return (
		<section className="c-space my-20" id="contact">
			<div className="relative min-h-screen flex items-center justify-center flex-col">
				<img
					src="/assets/terminal.png"
					alt="terminal background"
					className="absolute inset-0 min-h-screen"
				/>
				<div className="contact-container">
					<h3 className="head-text">Let's Talk</h3>
					<p className="text-lg text-white-600 mt-3">
						Whether you are looking to build a new website, improve your
						existing platform, or bring a unique project to life, I am here to
						help you.
					</p>
					<form className="mt-12 flex flex-col space-y-7">
						<label className="space-y-3">
							<span className="field-label">Full Name</span>
							<input
								type="text"
								name="name"
								required
								className="field-input"
								placeholder="John Doe"
							/>
						</label>
						<label className="space-y-3">
							<span className="field-label">Email</span>
							<input
								type="email"
								name="email"
								required
								className="field-input"
								placeholder="johndoe@gmail.com"
							/>
						</label>
						<label className="space-y-3">
							<span className="field-label">Message</span>
							<textarea
								name="message"
								required
								rows={5}
								className="field-input"
								placeholder="Hi, I am interested in..."
							/>
						</label>
						<button className="field-btn" type="submit">
							Send Message
							<img
								src="/assets/arrow-up.png"
								alt="arrow-up"
								className="field-btn_arrow"
							/>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
export default Contact;
