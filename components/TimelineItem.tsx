import { motion } from 'framer-motion';

const TimelineItem = ({ education, index }: any) => {
    return (
        <div className="timeline-item d-flex pb-5 position-relative">
            {/* Timeline Line */}
            <div
                className="timeline-line"
                style={{
                    position: 'absolute',
                    left: '20px',
                    top: '0',
                    bottom: '0',
                    width: '3px',
                    background: 'linear-gradient(to bottom, #6366f1, #a855f7, rgba(168, 85, 247, 0))',
                    zIndex: 0,
                    borderRadius: '3px'
                }}
            />

            {/* Node */}
            <motion.div
                className="timeline-node"
                initial={{ scale: 0, boxShadow: "0 0 0 rgba(99, 102, 241, 0)" }}
                whileInView={{ scale: 1, boxShadow: "0 0 25px rgba(99, 102, 241, 0.6)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#0f172a',
                    border: '3px solid #6366f1',
                    zIndex: 2,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)'
                }}
            >
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#fff' }} />
            </motion.div>

            {/* Content */}
            <div className="pl-4 ml-4 flex-grow-1">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <div
                        className="glass-card shadow-lg p-4"
                        style={{
                            background: "rgba(30, 41, 59, 0.6)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                            borderRadius: "20px",
                            transition: "all 0.3s ease",
                            boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
                        }}
                    >
                        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 gap-2">
                            <h3 className="text-white mb-0 font-weight-bold" style={{ fontSize: '1.5rem', letterSpacing: '-0.5px' }}>
                                {education.schoolName}
                            </h3>
                            <span
                                className="px-3 py-1 text-sm font-weight-bold"
                                style={{
                                    background: "rgba(99, 102, 241, 0.15)",
                                    color: "#a78bfa",
                                    borderRadius: "30px",
                                    border: "1px solid rgba(99, 102, 241, 0.3)"
                                }}
                            >
                                {education.duration}
                            </span>
                        </div>
                        <h5 className="mb-3" style={{ color: "#e2e8f0", fontSize: '1.1rem' }}>{education.subHeader}</h5>
                        {education.grade && (
                            <span
                                className="d-inline-block px-3 py-1 mb-3 text-sm font-weight-bold"
                                style={{
                                    background: "rgba(16, 185, 129, 0.15)",
                                    color: "#34d399",
                                    borderRadius: "8px",
                                    border: "1px solid rgba(16, 185, 129, 0.3)"
                                }}
                            >
                                {education.grade}
                            </span>
                        )}
                        <p className="text-slate-400 mb-0" style={{ color: "#94a3b8", lineHeight: '1.6' }}>{education.desc}</p>

                        {education.descBullets && (
                            <ul className="text-slate-400 pl-3 mb-0 mt-3" style={{ color: "#94a3b8" }}>
                                {education.descBullets.map((bullet: string, i: number) => (
                                    <li key={i} className="mb-2">{bullet}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TimelineItem;
