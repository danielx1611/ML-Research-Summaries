const summaryTemplates = [
  {
    id: "paper-one",
    title:
      "Forecasting >100 MeV SEP Events and Intensity based on CMEs and other Solar Activities using Machine Learning",
    description:
      "SEP event forecasting uses classifier/retraining strategies with autoencoders to handle extreme imbalance; cRT+AE and DL+rRT+AE lead performance.",
    link: "https://cs.fit.edu/~pkc/theses/griessler23.pdf",
    year: "2023",
    source: "FIT",
    noteDate: "2026-01-16",
    reflection: [
      "This paper investigates the forecasting of >100 MeV Solar Energetic Particle (SEP) events, as well as the forecasting of the peak intensity of these events under extremely imbalanced data.",
      "For event classification, this is primarily done through three different approaches, which were implemented in Keras/Tensorflow: a regular neural network with oversampling (referred to as cRegNN), classifier re-training (cRT), and classifier re-training with an autoencoder(crT+AE). The oversampling of the data was used to try and mitigate the scarcity of SEP events, while cRT and cRT+AE revolve around decoupling feature learning from classifier optimization. These different techniques were compared to test which method had the most accurate forecasting when presented with the highly imbalanced data. Among these options, cRT+AE achieved the best performance, reaching an F1 score of 0.800, and was resistant to false positives compared to the oversampling-based models. Other metrics used for evaluation of the classification approaches include Heidke Skill Score (HSS) and True Skill Statistic (TSS).",
      "For peak intensity prediction, the classification approaches were adjusted to work with regression-style data. The three approaches presented were a regular neural network with oversampling (referred to as rRegNN), regression re-training (rRT), and regression re-training with an autoencoder (rRT+AE). Additionally, the paper incorporates the Richardson model through two strategies: Combining the Richardson Forecast (RC), which blends a neural-network’s predictions with Richardson’s forecast, and Learning Richardson Error, which helps train a model by teaching it to correct residual errors present in the Richardson equation. A loss-based approach, DenseLoss (DL), was also evaluated to address the imbalance in regression methods without oversampling. After comparison, it becomes evident that the combination of DL+rRT+AE performed the best, with an F1 score of 0.800. Additional metrics used for evaluation of the regression approaches include HSS, TSS, mean absolute error (MAE), and pearson correlation (PCC).",
    ],
  },
  {
    id: "highly-imbalanced-regression-tabular-data",
    title:
      "Highly Imbalanced Regression with Tabular Data in SEP and Other Applications",
    description:
      "This paper addresses highly imbalance regression on tabular data, where the imbalance ratio >= 1000.",
    link: "https://arxiv.org/pdf/2509.16339",
    year: "2025",
    source: "Proc. IEEE Intl. Conf. Machine Learning and Applications",
    noteDate: "2026-01-23",
    reflection: [
      "This paper addresses highly imbalance regression on tabular data, where the imbalance ratio >= 1000. It is argued that Mean Squared Error is insufficient to evaluate the model’s predictions since it ignores the correlation between predictions and true values. The paper proposes CISIR (Correlation, Involution importance, and Stratified sampling for Imbalanced Regression), which has 3 components: (1) the weighted Pearson Correlation Coefficient (wPCC), (2) Monotonically Decreasing Involution (MDI) Importance, which generalizes inverse and linear weighting, while supporting convex, linear, or concave emphasis on rare samples, and (3) stratified sampling of mini-batches to ensure rare instances appear in every batch. The resulting model is based on a weighted MSE plus a scaled wPCC regularizer, with the importance derived from KDE-estimated label densities.",
      "The method was evaluated on five highly imbalanced tabular datasets (two SEP datasets, SARCOS, Blog Feedback, and Online News Popularity). The main metrics being use are AORE (average of overall MAE and rare-instance MAE) as well as AORC (average of overall PCC and rare-instance PCC), with additional metric checks such as MAE, MAER, PCC, and PCCR. Across the datasets, CISIR achieved the lowest AORE in the majority of datasets, and the highest/second-highest AORC in all datasets, outperforming other methods such DenseLoss, Balanced MSE, and other LDS,FDS-based baselines. Through the ablation studies, it was stated that wPCC contributed the largest gains, improving correlation as well as reducing error. ",
    ],
  },
  {
    id: "density-based-weighting-imbalanced-regression",
    title: "Density-based Weighting for Imbalanced Regression",
    description:
      "DenseWeight and DenseLoss provide a density-based cost-sensitive alternative to resampling for imbalanced regression.",
    link: "https://link.springer.com/article/10.1007/s10994-021-06023-5",
    year: "2021",
    source: "MLJ",
    noteDate: "2/13/2026",
    reflection: [
      "The paper proposes DenseWeight, a density-based sample weighting method for regression on imbalance datasets, and DenseLoss, a cost-sensitive neural networking training approach that is built on top of DenseWeight. Notably, regression lacks discrete categories, so it is harder to quantify the rarity of a sample compared to classification. To address this, a sample’s probability is estimated using kernel density estimation (KDE), and rarity is defined as being inversely proportional to this density. After normalizing density values, a weighting function controlled by a single hyperparameter, alpha, adjusts how strongly rare values are emphasized, while ensuring weights are positive and have a mean weight of 1. DenseLoss incorporates these weights in the loss function, making rare samples have more contribution to the gradient without needing to modify the dataset (unlike resampling methods such as SMOGN). This technique provides control over the trade-off between performance on common and rare target regions.",
      "DenseLoss consistently improved performance on rare target ranges. In synthetic experiments, it significantly reduced RMSE and MAE in rare sample bins while slightly hindering performance on the most common sample bins. An alpha value of roughly 1.0 provides a strong tradeoff in order to increase rare sample accuracy. When compared to state-of-the-art resampling method SMOGN across 20 benchmark datasets, DenseLoss achieved more statistically significant wins in rare bins, typically outperforming SMOGN. In a real-world application involving precipitation downscaling, DenseLoss improved performance for both rare samples and common samples. In turn, it is concluded that cost-sensitive density-based weighting is an effective alternative to sampling-based approaches for imbalanced regression.",
    ],
  },
  {
    id: "machine-learning-approach-time-series-relativistic",
    title:
      "A Machine Learning Approach to Predicting SEP Proton Intensity and Events Using Time Series of Relativistic Electron Measurements",
    description:
      "A neural time-series modeling approach using multivariate electron and proton data enables more accurate and stable 30–60 minute forecasting of solar energetic particle events compared to traditional matrix-based methods.",
    link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024SW003921",
    year: "2025",
    source: "Space Weather",
    noteDate: "2026-01-30",
    reflection: [
      "This paper presents a machine-learning approach for forecasting SEP events 30-60 minutes in advance using multivariate time-series data, which is composed of relativistic electron and proton data. The approach uses neural time-series models, both standard neural networks and recurrent neural networks (with GRU layers) to learn from the data and predict proton intensity and occurrence of SEP events. The model is fed a 2-hour input window that is sampled every 5 minutes, and then makes a prediction of the intensity at 30 minutes after the current time, as well as 60 minutes afterwards. The paper compares a single model (M1) setup and a multi-model setup (M3) that first tries to classify the “phase” of the window (background, rising, or falling) and then feeds the data to a specialized regressor that predicts the intensity depending on the phase. The models are evaluated on regression metrics (MAE, temporal lag), and event detection metrics via an alert-generation framework that can accommodate extended and advanced warning windows.",
      "Compared to Posner’s matrix-based estimator that tries to bin electron intensity and rise rates into a fixed lookup table, the neural RNN models achieved lower errors when predicting intensity and had more stable forecasts. However, the RNNs tended to lag the rising edge of the events, which was attributed to inherent physical constraints, such as the timing offsets between electrons and protons, which limits how far ahead it can be predicted. Once “advance warnings”, which issues an alert immediately at prediction time, and “extended warnings” which results in smoother alert gaps, were incorporated the RNN models achieved higher F1 scores and had much fewer false positives. "
    ],
  },
  {
    id: "decoupling-representation-classifier-long-tailed-recognition",
    title: "Decoupling Representation and Classifier for Long-Tailed Recognition",
    description:
      "A decoupled training approach separates representation learning from classifier learning to address class imbalance in long-tailed datasets.",
    link: "https://openreview.net/pdf?id=r1gRTCVFvB",
    year: "2020",
    source: "ICLR",
    noteDate: "2026-02-06",
    reflection: [
      "The paper proposes a decoupled approach for long-tailed (imbalanced) datasets, with the approach being tested on visual recognition and image classification. The method separates representation learning from classifier learning to better address class imbalance during training. High-quality feature representation does not require class-balanced training, and can even be done with just instance-balanced (natural) sampling. In some cases, it is even optimal. Once the representation is frozen, the performance can be substantially improved by rebalancing just the classifier, which was done with several methods such as classifier re-training (cRT), a nearest class mean (NCM) classifier, or a τ-normalization that rescales classifier weight norms to counteract bias towards the higher frequency classes.",
      "An extensive evaluation was performed across three standard long-tailed benchmarks, ImageNet-LT, Places-LT, and iNaturalist 2018, analyzing accuracy for many-shot (>100), medium-shot (20-100), and few-shot (<20) classes. Decoupled methods significantly outperformed joint training, especially on medium and few-shot classes, even when using simple classifiers. Τ-normalization and classifier re-training yielded large gains (+5-11%) on medium/few-shot classes on ImageNet-LT, setting new state of the art performances across all datasets, outperforming more complex methods involving specialized loss/memory modules. Notably, freezing the representation and only adjusting the classifier was shown to perform better than fine-tuning the entire network, reinforcing the claim that long-tailed recognition benefits more from classifier boundary correction rather than imbalance-aware representation learning. ",
    ],
  },
  {
    id: "delving-into-deep-imbalanced-regression",
    title: "Delving into Deep Imbalanced Regression",
    description:
      "Introduces DIR and proposes LDS/FDS smoothing methods for handling continuous-target imbalance.",
    link: "https://proceedings.mlr.press/v139/yang21m/yang21m.pdf",
    year: "2021",
    source: "ICML",
    noteDate: "2/20/2026",
    reflection: [
      "The paper introduces the problem of Deep Imbalanced Regression (DIR), which addresses learning from data distributions that are heavily skewed, specifically for continuous ranges of values instead of categorical data. Unlike class imbalance, continuous targets lack hard boundaries and typically have meaningful relationships with other targets in its proximity, making traditional methods inadequate. The paper proposes two complementary approaches, Label Distribution Smoothing (LDS) and Feature Distribution Smoothing (FDS). LDS uses kernel density estimation to smooth the label distribution, generating an “effective” density that enables better loss re-weighting. FDS works in the feature space by smoothing the mean and covariance statistics of learned representations across neighboring bins. Afterwards, FDS follows up with a whitening and re-coloring calibration of the data. This process corrects biased feature estimates for regions with less data while also improving generalization for few-shot or zero-shot target values.",
      "The methods were tested against five large-scale datasets, including vision (age estimation), NLP (semantic similarity), healthcare (health score prediction), and depth estimation, showing consistent improvements over strong baselines. The results showed that LDS and FDS boosted performance in medium- and low-shot ranges while maintaining or even slightly improving performance for many-shot ranges. In zero-shot areas, where interpolation and extrapolation are needed, the methods deliver substantial improvements over vanilla regression. Across various experiments, LDS and FDS outperformed other adapted imbalanced classification techniques, sometimes reducing errors by up to 50-60% in few-shot ranges, showing the need for regression-specific imbalance handling. The paper concludes that smoothing for both the label and feature space can help provide an effective framework for imbalance regression problems.",
    ],
  },
  {
    id: "paper-two",
    title: "Another Reading Note",
    description:
      "Duplicate this template for each reading I want to capture.",
    link: "https://[Add URL]",
    year: "[Add year]",
    source: "[Add source]",
    noteDate: "[Add note date]",
    reflection: [
      "[Write a paragraph describing the main ideas and why this reading matters to me.]",
      "[Add a second paragraph for key takeaways, examples, or how it connects to other things I have read.]",
      "[Capture any insights, open questions, or follow-up ideas here.]",
    ],
  },
];

export default function SummariesPage() {
  return (
    <div className="bg-zinc-50">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">
            Notes Workspace
          </p>
          <h1 className="text-4xl font-semibold text-zinc-900 sm:text-5xl">
            Clear and concise paper summaries.
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600">
            Each section below is a prepared page for storing reading details
            and drafting paragraph-length notes. I add a new entry whenever
            I capture another source.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {summaryTemplates.map((template) => (
            <article
              key={template.id}
              className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-zinc-900">
                  {template.title}
                </h2>
                <p className="text-sm text-zinc-500">{template.description}</p>
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Reading Details
                  </p>
                  <dl className="mt-4 space-y-4 text-sm text-zinc-700">
                    <div>
                      <dt className="font-semibold text-zinc-900">Title</dt>
                      <dd className="mt-1 text-zinc-600">
                        {template.title}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-zinc-900">Link</dt>
                      <dd className="mt-1 text-emerald-600">
                        {template.link.startsWith("http") ? (
                          <a
                            href={template.link}
                            className="underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-700"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {template.link}
                          </a>
                        ) : (
                          <span>{template.link}</span>
                        )}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-zinc-900">Year</dt>
                      <dd className="mt-1 text-zinc-600">{template.year}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-zinc-900">
                        Source
                      </dt>
                      <dd className="mt-1 text-zinc-600">{template.source}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-zinc-900">
                        Note Date
                      </dt>
                      <dd className="mt-1 text-zinc-600">
                        {template.noteDate}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Reflection
                  </p>
                  <div className="mt-4 space-y-4 text-sm text-zinc-600">
                    {template.reflection.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
