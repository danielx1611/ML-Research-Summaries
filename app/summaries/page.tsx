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
    noteDate: "2026-02-13",
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
    noteDate: "2026-02-20",
    reflection: [
      "The paper introduces the problem of Deep Imbalanced Regression (DIR), which addresses learning from data distributions that are heavily skewed, specifically for continuous ranges of values instead of categorical data. Unlike class imbalance, continuous targets lack hard boundaries and typically have meaningful relationships with other targets in its proximity, making traditional methods inadequate. The paper proposes two complementary approaches, Label Distribution Smoothing (LDS) and Feature Distribution Smoothing (FDS). LDS uses kernel density estimation to smooth the label distribution, generating an “effective” density that enables better loss re-weighting. FDS works in the feature space by smoothing the mean and covariance statistics of learned representations across neighboring bins. Afterwards, FDS follows up with a whitening and re-coloring calibration of the data. This process corrects biased feature estimates for regions with less data while also improving generalization for few-shot or zero-shot target values.",
      "The methods were tested against five large-scale datasets, including vision (age estimation), NLP (semantic similarity), healthcare (health score prediction), and depth estimation, showing consistent improvements over strong baselines. The results showed that LDS and FDS boosted performance in medium- and low-shot ranges while maintaining or even slightly improving performance for many-shot ranges. In zero-shot areas, where interpolation and extrapolation are needed, the methods deliver substantial improvements over vanilla regression. Across various experiments, LDS and FDS outperformed other adapted imbalanced classification techniques, sometimes reducing errors by up to 50-60% in few-shot ranges, showing the need for regression-specific imbalance handling. The paper concludes that smoothing for both the label and feature space can help provide an effective framework for imbalance regression problems.",
    ],
  },
  {
    id: "ranksim-ranking-similarity-regularization-for-deep-imbalanced-regression",
    title:
      "RankSim: Ranking Similarity Regularization for Deep Imbalanced Regression",
    description:
      "RankSim aligns ranking structures in label and feature space to improve deep imbalanced regression performance.",
    link: "https://proceedings.mlr.press/v162/gong22a/gong22a.pdf",
    year: "2022",
    source: "ICML",
    noteDate: "2026-02-27",
    reflection: [
      "This paper proposes RankSim (Ranking Similarity Regularization), a regularization method for deep imbalanced regression that uses the natural ordering of continuous labels to reinforce training. Unlike classification, regression labels are continuous, and in turn, are inherently ordered. This is an additional feature that most algorithms do not exploit. RankSim encodes an inductive bias that samples close to each other in label space should be close in feature space, while also encouraging labels far away in label space to be far away in feature space. For each sample in a batch, the method computes pairwise similarities in label space and in feature space, ranks them according to similarity of their neighbors, and penalizes mismatches in the ranking order. Unlike prior smoothing-based techniques like Label Distribution Smoothing (LDS) and Feature Distribution Smoothing (FDS), which primarily smooth only nearby labels, RankSim encourages local and global relationships by enforcing that the full ranking of neighbors in feature space should be similar to the full ranking in label space. The regularizer is complementary to standard techniques like re-weighting, focal regression (Focal-R) and two-stage retraining.",
      "Rank-Sim achieved new state-of-the-art performance on three deep imbalance regression benchmarks, across multiple metrics (MAE, GM, MSE, Pearson Correlation), and across many-shot, medium-shot, and few-shot regions, RankSim consistently improved over vanilla training and over other existing imbalance strategies. It also substantially outperformed smoothing-based methods in zero-shot target scenarios, suggesting that the global ranking constraint helps with interpolation and extrapolation during training. The method adds a moderate amount of overhead and is compatible with various hyperparameter choices. Enforcing alignment between label-space and feature-space rankings helps provide a strong mechanism for improving representation learning in deep imbalanced regression.",
    ],
  },
  {
    id: "rank-n-contrast-learning-continuous-representations-for-regression",
    title: "Rank-N-Contrast: Learning Continuous Representations for Regression",
    description:
      "The paper proposes a new representation learning framework for regression problems.",
    link: "https://openreview.net/pdf?id=WHedsAeatp",
    year: "2023",
    source: "NeurIPS",
    noteDate: "2026-03-06",
    reflection: [
      "The paper proposes a new representation learning framework for regression problems. Traditional models optimize prediction losses like L1 or MSE directly on outputs, which does not utilize the meaningful structure in learned feature representations. Embeddings can become fragmented and fail to capture continuous relationships between samples that exist in regression tasks. The paper introduces Rank-N-Contract (RNC) to address this problem. The method learns regression-aware embeddings by ranking samples according to their target values, then applying a contrastive objective based on the rankings. The core idea is the Rank-N-Contrast loss, which treats each sample as an anchor, then compares it with the others in the batch. This then enforces that samples with closer target values should have a higher similarity in the embedding space than samples with further target values. This aligns distances in feature space with distances in label space effectively, enforcing the ordered representation that can be found in continuous regression labels.",
      "Experiments were conducted across multiple datasets (age prediction, EEG brain-age estimation, gaze direction prediction, and temperature prediction), showing that RNC consistently improves regression performance compared with standard losses and other state-of-the-art methods. Adding RNC to baseline regression models reduces prediction error across datasets and improves mean absolute error and R-squared error, with average reductions of roughly 5-12% depending on the dataset. The method is also more robust to corrupted data, has better performance with limited training data, improved transfer learning, and stronger generalization to unseen (zero-shot) target ranges. Explicitly learning ordered, continuous representations aligned with regression targets leads to more efficient and generalizable regression models.",
    ],
  },
  {
    id: "conr-contrastive-regularizer-for-deep-imbalanced-regression",
    title: "ConR: Contrastive Regularizer for Deep Imbalanced Regression",
    description:
      "ConR regularizes feature representations to better preserve minority label structure in deep imbalanced regression.",
    link: "https://openreview.net/pdf?id=RIuevDSK5V",
    year: "2024",
    source: "ICLR",
    noteDate: "2026-03-13",
    reflection: [
      "The paper proposes a method for improving regression models for imbalanced datasets with continuous labels. In such scenarios, minority labels have few training examples, meaning their learned feature representations tend to merge/collapse with/towards those of majority labels, leading to inaccurate predictions for the minority samples. The paper proposes ConR, a contrastive regularizer that aligns relationships in the label space with those in the feature space. ConR selects anchors, positive pairs, and negative pairs based on label similarity and prediction similarity. Positive pairs (samples with similar labels) are pulled closer in feature space, while negative pairs (samples with different labels but similar predictions) are pushed apart. ConR introduces an additional part, “relative pushing weights”, which increase repulsions strength for minority samples and pairs whose labels differ by larger amounts, helping prevent minority features from collapsing into majority clusters. The final form of the method combines a standard regression loss with the ConR regularization term to enforce accurate predictions and well-structured feature representations.",
      "Experimental results show that ConR improved performance across multiple benchmarks and tasks, including age estimation (AgeDB-DIR and IMDB-WIKI-DIR), depth estimation (NYUD2-DIR), and gaze estimation (MPIIGaze-DIR). Across the datasets, adding ConR to existing state-of-the-art methods such as LDS, FDS, RAnkSim, and Balanced MSE reduced prediction errors and improved metrics like MAE and RMSE, especially in few-shot (minority) regions. On the AgeDB-DIR benchmark, ConR achieved a best MAE of 6.81 overall and 9.21 for few-shot samples, outperforming baseline methods. It also improved depth estimation with an RMSE of 1.265 on the NYUD2-DIR dataset. The paper concludes that ConR effectively mitigates imbalance in regression tasks via the preservation of local and global label relationships, while remaining computationally efficient and compatible with existing methods.",
    ],
  },
  {
    id: "deep-imbalanced-regression-via-hierarchical-classification-adjustment",
    title: "Deep Imbalanced Regression via Hierarchical Classification Adjustment",
    description:
      "This paper proposes Hierarchical Classification Adjustment (HCA), a method designed to improve regression tasks when the data is imbalanced.",
    link: "https://openaccess.thecvf.com/content/CVPR2024/papers/Xiong_Deep_Imbalanced_Regression_via_Hierarchical_Classification_Adjustment_CVPR_2024_paper.pdf",
    year: "2024",
    source: "CVPR",
    noteDate: "2026-03-20",
    reflection: [
      "This paper proposes Hierarchical Classification Adjustment (HCA), a method designed to improve regression tasks when the data is imbalanced. Instead of directly predicting the values, the method converts regression into a classification problem by dividing the target range into bins. The method’s main idea is to use multiple classifiers at differing levels of granularity. Coarse classifiers (with less bins) are better at being balanced and accurate, but are less precise with what is in the bin, while fine classifiers (with more bins) are more precise but less reliable due to the imbalance present in the smaller bin. HCA combines these two types by using the coarse classifiers to guide the predictions of the fine classifier, improving accuracy. To make it more efficient, an additional version of the method was proposed, HCA-d, which distills the information from all classifiers into a single model while preserving the consistency of the predictions.",
      "The method was evaluated on tasks such as age estimation, crowd counting, and depth estimation. HCA consistently outperformed standard regression and classification approaches. It achieved lower error and improved performance across both common and rare samples. The improvements are very strong when the dataset is both imbalanced and has a more limited amount of data, while gains are smaller when the data is plentiful across all ranges. The paper concludes that combining coarse and fine classifiers in a hierarchical way leads to more accurate predictions and better regression models.",
    ],
  },
  {
    id: "visualizing-data-using-t-sne",
    title: "Visualizing Data using t-SNE",
    description:
      "The paper introduces t-Distributed Stochastic Neighbor Embedding (t-SNE), a nonlinear dimensionality reduction algorithm.",
    link: "https://www.jmlr.org/papers/volume9/vandermaaten08a/vandermaaten08a.pdf?fbcl",
    year: "2008",
    source: "JMLR",
    noteDate: "2026-03-27",
    reflection: [
      "The paper introduces t-Distributed Stochastic Neighbor Embedding (t-SNE), a nonlinear dimensionality reduction algorithm. It is designed to visualize high-dimensional (>3D) data in 2D or 3D while preserving a meaningful structure in the data. The method builds on top of normal SNE, which converts pairwise distances into probabilities that represent similarity between samples, and then minimizes the mismatch between high- and low-dimensional distributions. t-SNE improves on SNE in two main ways: using a symmetrized probability distribution and simplifying optimization, and by replacing the Gaussian similarity in the low-dimensional space with a heavy-tailed Student-t distribution, which helps alleviate the “crowding problem” where points collapse towards the center. The changes help increase repulsion between dissimilar points while still keeping similar points close together, making the optimization more stable and better at capturing both local neighborhoods and global cluster structure.",
      "t-SNE significantly outperforms competing dimensionality reduction techniques (PCA, Isomap, LLE, Sammon mapping) across multiple datasets. On the MNIST dataset, t-SNE produces clear, well-separated clusters of digits, whereas other methods show heavy overlap or poor structure. It also captures fine-grained intra-class variations and supports downstream tasks: a 1-NN classifier trained on the 2D t-SNE embedding achieved lower error (5.13%) than using the original high-dimensional data (5.75%). Across various datasets, t-SNE consistently revealed meaningful class structures that other methods failed to cleanly separate. t-SNE is a state-of-the-art visualization tool that effectively preserves local relationships while revealing global patterns, but it has some drawbacks such as having quadratic complexity, sensitivity to high intrinsic dimensionality, and a non-convex objective.",
    ],
  },
  {
    id: "why-should-i-trust-you-explaining-the-predictions-of-any-classifier-lime",
    title:
      '"Why Should I Trust You?": Explaining the Predictions of Any Classifier (LIME)',
    description:
      "LIME introduces local, interpretable, model-agnostic explanations and SP-LIME for selecting representative explanations.",
    link: "https://dl.acm.org/doi/pdf/10.1145/2939672.2939778?",
    year: "2016",
    source: "SIDKDD",
    noteDate: "2026-04-03",
    reflection: [
      "This paper proposes LIME (Local Interpretable Model-Agnostic Explanations), a method for explaining the predictions of any machine learning classifier by approximating it locally with a simpler, interpretable model. The main idea is that a complex model’s behavior around a single prediction can be approximated by a sparse linear model that is easy for humans to understand. LIME perturbs the input instance, querying the black-box model on the perturbed samples, then fits a weighted interpretable model that minimizes a trade-off between local fidelity (matching the original model’s output near the instance) and interpretability (keeping the explanations human-readable). Additionally, the paper proposes SP-LIME, which selects a diverse, representative set of instances using submodular optimization so that a user can gain a global understanding of a model’s behavior from a small set of explanations.",
      "The method shows strong performance across multiple evaluation settings. In simulated experiments, LIME achieved over 90% recall in recovering truly important features, significantly outperforming other methods like Parzen and greedy methods, indicating higher faithfulness to the original model. It also yields the best results in helping users judge whether to trust predictions, with F1 scores around 95-97% across classifiers and datasets, far exceeding alternatives. In model selection tasks, LIME (more so with SP-LIME) enabled users to correctly identify better-generalizing models even when the accuracy metrics were misleading. Further studies involving human-subjects showed that explanations helped non-experts improve models through feature engineering and identifying suspicious correlations (e.g. classifier relying on a snowy background instead of an animal’s features). LIME provides accurate, interpretable, and model-agnostic explanations that significantly improve trust, model debugging, and decision-making for machine learning models.",
    ],
  },
  {
    id: "a-unified-approach-to-interpreting-model-predictions-shap",
    title: "A Unified Approach to Interpreting Model Predictions (SHAP)",
    description:
      "SHAP unifies additive feature attribution methods with Shapley values for consistent model explanations.",
    link: "https://proceedings.neurips.cc/paper/2017/file/8a20a8621978632d76c43dfd28b67767-Paper.pdf",
    year: "2017",
    source: "NeurIPS",
    noteDate: "2026-04-10",
    reflection: [
      "This paper introduces SHAP (SHapley Additive exPlanations), a framework for interpreting predictions from complex machine learning models. The main idea is to treat explanation methods as “additive feature attribution models”, where a prediction is broken down into the contributions from each of the features. Many existing methods, like LIME, DeepLIFT, or Shapley sampling, all fit into the additive framework, and there is a unique solution satisfying all three desirable properties, namely local accuracy, missingness, and consistency. Using cooperative game theory as a reference, the identified solution was Shapley values, which measure a feature’s contribution to a prediction by averaging the marginal effect it has across all possible subsets of features. SHAP then provides algorithms like Kernel SHAP or Deep SHAP to approximate those values efficiently for various types of models.",
      "In terms of results, the paper demonstrates that SHAP-based methods outperformed approaches in regards to computation and quality. Experiments showed that Kernel SHAP achieved higher sample efficiency and more accurate feature importance estimates than LIME and standard Shapley sampling, while also requiring fewer model evaluations. User studies also revealed that SHAP’s explanations aligned more closely with human intuition, especially in scenarios involving feature interactions (like max functions), where other methods can produce inconsistent or humanly unintuitive attributions. SHAP provides a theoretically grounded and empirically superior framework for model interpretation, unifying prior work and improving its consistency, accuracy, and interpretability of the explanations it produces.",
    ],
  },
  {
    id: "grad-cam-visual-explanations-from-deep-networks-via-gradient-based-localization",
    title:
      "Grad-CAM: Visual Explanations from Deep Networks via Gradient-based Localization",
    description:
      "Grad-CAM generates class-discriminative heatmaps by weighting final convolutional feature maps with target gradients.",
    link: "https://openaccess.thecvf.com/content_ICCV_2017/papers/Selvaraju_Grad-CAM_Visual_Explanations_ICCV_2017_paper.pdf",
    year: "2017",
    source: "ICCV",
    noteDate: "2026-04-17",
    reflection: [
      "This paper introduces Grad-Cam (Gradient-weighted Class Activation Mapping), which is a method for generating visual explanations of decisions made by convolutional neural networks. The core idea is to use gradients of a target output like a class score that is flowing into the final convolutional layer of a model to compute importance weights for each feature map. It then combines these maps to produce a heatmap highlighting sections of the image that are the most relevant to the prediction. The approach can be applied across various CNN architectures (such as classification, captioning, and VQA (visual question answering) models) without requiring any architectural changes or retraining of the model. It can also be combined with high-resolution gradient-based techniques to form Guided Grad-CAM, which produces class-discriminative and fine-grained visualizations.",
      "Grad-CAM performed strongly across multiple evaluations. On the ILSVRC-15 weakly supervised localization task, it outperformed prior visualization methods and even surpassed standard CAM while maintaining the original classification accuracy. Studies with human testers showed that the visualizations were more interpretable for humans and helped users distinguish between classes and assess model reliability. Grad-CAM also exhibited higher faithfulness to model behavior and proved useful for diagnosing model failures and identifying dataset bias.",
    ],
  },
  {
    id: "forecasting-100-mev-sep-events-chapter-3-4-2-4-3-1",
    title:
      "Forecasting >100 MeV SEP Events and Intensity based on CMEs and other Solar Activities using Machine Learning (Chapter 3 and 4.2.4.3.1)",
    description:
      "Two-stage cRT + AE training with preprocessing and balancing improves SEP-event classification under severe class imbalance.",
    link: "https://cs.fit.edu/~pkc/theses/griessler23.pdf",
    year: "2023",
    source: "FIT",
    noteDate: "2026-04-24",
    reflection: [
      "The data was preprocessed in order to be ready for machine learning. The raw features were mostly retained but adjusted based on outside knowledge, then scaled to [0,1] to ensure features didn’t artificially dominate training. For features with large value ranges, a log transformation was applied before undergoing normalization, which improves numerical stability during optimization and training. The preprocessing was essential for the algorithm’s effectiveness, as it had a direct impact on how the neural network interpreted and weighted the different features.",
      "The core algorithm discussed was a two-stage neural network approach with classifier re-training and an autoencoder feature (cRT + AE). In the first stage, the model learned feature representations from the imbalance dataset. In the second, earlier layers were frozen and a new classifier (with an additional hidden layer appended) was retrained on a more balanced dataset to try and improve decision boundaries. Performance analyses showed that the method generally improved classification metrics like F1 score and TSS compared to simpler methods. These gains, however, depended on the level of oversampling of the rare class data and often introduced a trade-off between false positives and false negatives. Feature importance analysis indicated that the model captured meaningful relationships between key variables, but also showed that the model had sensitivity to local data distributions, which could lead to occasional misclassifications of samples. ",
    ],
  },
  {
    id: "prediction-solar-energetic-particle-event-peak-proton-intensity-richardsons",
    title:
      "Prediction of Solar Energetic Particle Event Peak Proton Intensity Using a Simple Algorithm Based on CME Speed and Direction and Observations of Associated Solar Phenomena (Richardson’s)",
    description:
      "An empirical CME speed/direction SEP-intensity model with radio and CME-property filtering improves forecasting skill while managing false alarms.",
    link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018SW002032",
    year: "2018",
    source: "Space Weather",
    noteDate: "2026-05-08",
    reflection: [
      "The paper proposes an empirical forecasting method for predicting the peak intensity of solar energetic particle (SEP) events near 1 AU using only a few observable properties of coronal mass ejections (CMEs). The core of the algorithm is centered on a formula developed by Richardson et al. (2014) that models SEP intensity as an exponential function of CME speed and a Gaussian dependence on the longitudinal “connection angle” between the spacecraft and the solar eruption site. Faster CMEs and better magnetic connection to the observer produce stronger SEP events. The authors applied the model to over 300 CMEs from the DONKI database and later to an independent set of around 1100 CMEs from solar cycle 23 (1997-2006). They improved upon the prediction system by filtering events using indicators such as CME width, type II radio bursts, and type III radio bursts. These radio signatures helped distinguish the small subset of CMEs that actually generate SEP events.",
      "The results showed that the model was able to capture the behavior of large SEP events fairly well despite ignoring many physical details including particle transport and acceleration. For more intense SEP events, more than 80% of the predicted intensities were within one order of magnitude of observations. The model produced many false alarms due to roughly 85% of CMEs not being associated with detectable SEP events. Applying the aforementioned filters reduced the false alarm rate from around 70-80% down to 20-30%, though this caused some real SEP events to be missed in exchange. Skill-score analysis demonstrated that no single filtering strategy optimized every metric, but radio-emission filtering and CME speed-width thresholds consistently improved the model’s performance for moderate events. "
    ],
  },
  {
    id: "two-fists-one-heart-multi-objective-optimization-based-strategy-fusion-for-long-tailed-learning",
    title:
      "Two Fists, One Heart: Multi-Objective Optimization Based Strategy Fusion for Long-tailed Learning",
    description:
      "MOOSF frames long-tailed recognition as multi-objective strategy fusion and improves head/medium/tail balance.",
    link: "https://openreview.net/pdf?id=MEZydkOr3l",
    year: "2024",
    source: "ICML",
    noteDate: "2026-05-11",
    reflection: [
      "The paper proposes a new perspective on long-tailed classification by framing it as a multi-objective optimization problem rather than a single-objective accuracy maximization task. Existing long-tailed learning methods inherently trade off performance between head classes and tail classes. To address this, the authors introduce MOOSF (Multi-Objective Optimization based Strategy Fusion), which combines multiple long-tailed learning strategies including Balanced Softmax, LDAM, and BCL within a shared multi-task learning environment. Instead of relying on a single method, MOOSF dynamically fuses different strategies while resolving any conflicts between them. The framework has three major components: Hierarchical Influence Calibrated Adjustment (HICA), which adaptively weights the strategies based on their per-class effectiveness; Gradient Harmonization via Orthogonal Projection (GHOP), which reduces conflicting gradient directions between strategies; and Evolving Optimal Strategy Selection (EOSS), which dynamically selects the best-performing strategy for the various classes during inference time.",
      "The method achieves strong results across multiple long-tailed benchmarks including CIFAR-100-LT, ImageNet-LT, and iNaturalist 2018. The results show that even simple strategy fusion already outperforms many standalone long-tailed methods. MOOSF further improves performance consistently by better balancing the head, medium, and tail accuracies. On CIFAR-100-LT, MOOSF(CE+BS) improves overall accuracy from the low 40s to over 52% while also improving tail-class accuracy. Similar gains were made on ImageNet-LT and iNaturalist, where the fused strategies surpass strong baseline strategies such as BCL and RIDE. The paper notes that the fusion introduces extra computation and optimization complexity, but the gains in performance and better balance across class frequencies justify the additional cost.",
    ],
  },
  {
    id: "prediction-100-mev-sep-events-goes-satellite-data",
    title: "On the Prediction of >100 MeV Solar Energetic Particle Events Using GOES Satellite Data",
    description:
      "A VAR-plus-decision-tree pipeline uses cross-correlations in GOES X-ray/proton time series to improve >100 MeV SEP event prediction.",
    link: "https://ieeexplore.ieee.org/document/8258212",
    year: "2017",
    source: "IEEE",
    noteDate: "2026-05-15",
    reflection: [
      "The paper presented a machine-learning approach for predicting high-energy solar energetic particle (SEP) events (>100MeV) using data from GOES satellites. The authors focused on identifying if a major solar flare would lead to an SEP event that can significantly affect spacecraft, astronauts, and satellite systems. Their main contribution is the use of multivariate time-series analysis to capture not only correlations between X-ray and proton measurements, but also cross-correlations among different proton channels. This was not explored by prior works. The method extracted several hours of GOES X-ray and proton flux data before a flare event and modeled their temporal dependencies using a Vector Autoregression (VAR) framework. The coefficients from the VAR model are then used as features for an interpretable decision tree classifier.",
      "Using a balanced dataset of 47 SEP and non-SEP events between 1997 and 2013, the authors evaluated different observation windows (\"spans\") and lag values with stratified 10-fold cross-validation. Their best-performing model used a 30-hour observation span and lag value of 5, resulting in results of ~78% accuracy, 73% recall, 86% precision, and an AUC of 0.77. The decision trees revealed that correlations between lower-energy proton channels and X-ray channels were among the most important features for making predictions, while proton-proton correlations were also found to be strong indicators of SEP occurrence. The cross-correlations provided valuable predictive information and can improve SEP forecasting performance beyond previous methods such as UMASEP, which the model slightly outperformed."
    ],
  },
  {
    id: "pareto-deep-long-tailed-recognition-conflict-averse-solution",
    title: "Pareto Deep Long-Tailed Recognition: A Conflict-Averse Solution",
    description:
      "PLOT reframes long-tailed learning as conflict-aware multi-objective optimization to improve medium/tail performance while preserving head-class accuracy.",
    link: "https://openreview.net/pdf?id=b66P1u0k15",
    year: "2024",
    source: "ICLR",
    noteDate: "2026-05-18",
    reflection: [
      "The paper proposes a new framework called PLOT (Pareto deep LOng-Tailed recognition) for improving depp long-tailed recognition. Existing long tail learning methods are focused on static or dynamic re-balancing strategies such as re-weighting losses, adjusting logits, or resampling data. However, most of these ignore an important optimization issue, which is the fact that there are often conflicts between classes during training. Through empirical analysis, the paper showed that head classes dominate the optimization while tail classes experience conflicting gradients, which harms the shared representation learning space. To address this, the paper reformulated long-tailed classification as a multi-objective optimization (MOO) problem. Their key contribution is a temporal adaptation of MOO techniques from multi-task learning to deep long-tailed regression. Instead of modifying the architecture with separate task branches, they apply MOO only during the early feature-learning stage and then transition back to standard optimization. The final PLOT framework combined Conflict-Averse Gradient Descent (CAGrad), a loss that helped improve generalization, and Sharpness-Aware Minimization (SAM) to stabilize convergence.",
      "The method consistently improved upon a wide range of existing baselines, such as LDAM-DRW, cRT + Mixup, MiSLAS, GCL, and M2m, across CIFAR10/100-LT, Places-LT, ImageNet-LT, and iNaturalist benchmarks. For example, on CIFAR10-LT with imbalance ratio of 200, cRT+Mixup improves from 73.06% to 78.99% accuracy when augmented with PLOT, while GCL improves from 79.25% to 80.08%. On larger datasets, PLOT achieves state-of-the-art performance, especially improving medium and tail-class accuracy without severely hurting head classes. The paper also showed through Hessian spectrum and loss-landscape analyses that PLOT finds flatter minima and more balanced optimization trajectories, which supports the claim that reducing optimization conflicts leads to better representations and generalization.",
    ],
  },
  {
    id: "forecasting-sep-events-flare-xray-peak-ratios",
    title: "Forecasting Solar Energetic Particle (SEP) events with Flare X-ray peak ratios",
    description:
      "Uses GOES two-band soft X-ray peak-ratio features with flare peak flux to improve SEP/non-SEP separability and forecasting.",
    link: "https://www.swsc-journal.org/articles/swsc/full_html/2018/01/swsc180013/swsc180013.html",
    year: "2018",
    source: "Journal of Space Weather and Space Climate",
    noteDate: "2026-05-22",
    reflection: [
      "This paper investigated whether the ratio between two GOES satellite soft X-ray measurements can improve forecasting of Solar Energetic Particle (SEP) events, which are bursts of high-energy particles associated with coronal mass ejections. Instead of relying only on the standard 0.1-0.8 nm X-ray flare intensity commonly used in operational forecasting systems, the paper analyzed the ratio between the 0.05-0.4 nm and 0.1-0.8 nm flare bands as an additional predictive feature. The dataset is a large set of solar flares from 1998-2016, which was used to compare flares that produced SEP events against those that did not. The main finding was that SEP-producing flares tend to have lower X-ray peak ratios (i.e. “cooler” inferred flare temperatures) than non-SEP flares, especially for large SEP events originating from the Sun’s western hemisphere. Small SEP events were much harder to distinguish from non-SEP flares.",
      "The paper leveraged a two dimensional feature space using (1) the flare peak flux and (2) the X-ray peak ratio, then evaluated class separability statistically using t-tests and empirically through visualization, non-SEP, small SEP, NOAA SEP, and very large SEP events were separated into  different classes for analysis. The added ratio feature improved discrimination beyond using flare intensity alone. Two standard machine learning classifiers were applied to the data: a multilayer perceptron neural network and a k-nearest neighbors classifier. THe neural network produced smoother and useful decision boundaries, while the k-NN yielded noisier classification regions. The paper also compared its approach against existing SEP forecasting systems like PROTONS, ESPERTA, FORSPEF, and logistic-regression-based methods, noting that most prior systems use only single-band X-ray fluxes, CME measurements, or radio burst data.",
    ],
  },
  {
    id: "long-tailed-learning-as-multi-objective-optimization",
    title: "Long-Tailed Learning as Multi-Objective Optimization",
    description:
      "Reframes long-tailed classification as class-level multi-objective optimization using gradient-balanced grouping to reduce head-tail conflict.",
    link: "https://ojs.aaai.org/index.php/AAAI/article/view/28103",
    year: "2024",
    source: "AAAI",
    noteDate: "2026-05-26",
    reflection: [
      "The paper proposed a new way of addressing long-tailed classification by treating it as a multi-objective optimization problem rather than a standard single-loss classification problem. Existing long-tailed learning methods suffer from a “seesaw dilemma” where improving tail-class performance often lowers head-class performance and vice versa. This was attributed to gradient imbalance, which is where gradients from head classes dominate training updates, while tail-class gradients are either undercompensated or overcompensated via reweighting strategies. To solve this, the paper formulated each class loss as a separate optimization objective and sought a Pareto descent direction that improved all classes at the same time. Since directly solving a multi-objective problem with hundreds of classes is computationally impractical, the Gradient-Balancing Grouping (GBG) algorithm was introduced. GBG first computes gradient similarities between classes, groups together classes with similar gradient directions using graph partitioning, and then performs multi-objective optimization at the group level using a min-norm optimization that was derived from the Multi-Gradient Descent Algorithm (MDGA). The resulting algorithm produced a balanced update direction that reduced gradient conflicts and implicitly boosted the influence of tail classes.",
      "The method achieved state-of-the-art results on several major long-tailed benchmarks such as CIFAR10/100-LT, ImageNet-LT, and iNaturalist 2018. On ImageNet-LT, GBG reaches 57.6% top-1 accuracy with ResNet-50 and 58.7% with ResNeXt-50, outperforming previous methods such as BCL and RIDE. On CIFAR100-LT with an imbalance ratio of 100, the method improved accuracy to 52.31%, and on iNaturalist 2018 it achieved 71.9%, again surpassing prior approaches. The paper showed that grouping classes by gradient similarity is more effective than random grouping or grouping classes by class frequency alone, and that using too many objectives harms optimization due to the increased Pareto complexity.",
    ],
  },
  {
    id: "technique-prediction-spes-solar-radio-flux-statistical-analysis-ann-ga",
    title:
      "A technique for prediction of SPEs from solar radio flux by statistical analysis, ANN and GA",
    description:
      "A hybrid statistical-analysis + ANN + GA method forecasts SPE occurrence from multi-frequency solar radio flux features.",
    link: "https://link.springer.com/article/10.1007/s10509-018-3263-8",
    year: "2018",
    source: "Astro-phys. Space Sci.",
    noteDate: "2026-05-27",
    reflection: [
      "The paper proposed a hybrid forecasting method for predicting Solar Proton Events (SPEs) using measurement of solar radio flux (SRF) at frequencies of 2800, 1415, and 610 MHz. Statistical analysis was performed on historical SRF and SPE data from 1976-1994, examining how SPE occurrence correlated with two main features: namely the daily total SRF and the relative overall rate of increase in SRF over three consecutive days. These statistical relationships were combined using an Artificial Neural Network (ANN) and a Genetic Algorithm (GA). The ANN was used as a nonlinear function approximator that mapped SRF parameters to expected SPE occurrence using a multilayer feedforward network with different activation functions such as tan-sigmoid, log-sigmoid, and linear activation. The GA was then applied to optimize the prediction parameters, searching for the SRF thresholds and rate-of-change values that maximized prediction quality. The final optimized thresholds found were roughly 175 s.f.u. and 10% increase at 2800 MHz, 110 s.f.u. and 5% at 1415 MHz, and 70 s.f.u. and 10% at 610 MHz.",
      "The results show that the combined statistical analysis + ANN + GA approach achieved performance comparable to established methods from the Beijing Astronomical Observatory, even while using relatively simple radio-flux derived features. For a prediction window of 7-10 days, the method obtained Probability of Detection (POD) values ranging from 59% to 93%, depending on frequency and evaluation setup, though the False Alarm Rates (FARs) were relatively high, often exceeding 50%. Independent testing on 2003 data showed better detection rates, with some cases reaching 100% POD, but again at the cost of large false alarm rates.",
    ],
  },
  {
    id: "ts-mof-two-stage-multi-objective-fine-tuning-long-tailed-recognition",
    title:
      "TS-MOF: Two-Stage Multi-Objective Fine-tuning for Long-Tailed Recognition",
    description:
      "TS-MOF uses frozen-backbone multi-objective classifier-head fine-tuning to improve long-tailed recognition.",
    link: "https://openreview.net/pdf?id=S82Afyfbj3",
    year: "2025",
    source: "NeurIPS",
    noteDate: "2026-06-01",
    reflection: [
      "The paper proposes a framework for long-tailed image recognition, with head and tail class distributions. Existing long-tailed methods often improve tail-class accuracy at the expense of head-class accuracy, creating a “seesaw” tradeoff. To address this, TS-MOF splits learning into two stages. First, a backbone network is trained normally to learn strong visual features. Then, in a second stage, the backbone is frozen and multiple classifier heads are trained simultaneously using different long-tail learning strategies (including Balanced Softmax, BCL, and LOS). These strategies are used as separate objectives in a multi-objective optimization (MOO) framework. Two components drive the process: R-PLA (Refined Performance Level Agreement), which dynamically assigns weights to each strategy based on its per-class performance, and RD-PCGrad, which resolves conflicts between gradients from different strategies. At inference time, predictions from the classifier heads are combined using a class-specific weighting scheme that favors whichever strategy performs the best for that class.",
      "Experimentally, TS-MOF achieved state-of-the-art performance across several benchmark datasets while noticeably improving recognition of rare classes. On the CIFAR-100-LT dataset with imbalance ratio 100, TS-MOF achieved 56.8% overall accuracy, surpassing the previous best method. It also increased tail-class accuracy from 36.6% to 39.9% and head-class accuracy from 70.3% to 79.0%. On the ImageNet-LT dataset, overall accuracy improved to 56.3%, and on the iNaturalist dataset, overall accuracy improved to 72.3%. Different strategies were shown to naturally specialize in different regions of the class distribution, and TS-MOF successfully learns how to combine them.",
    ],
  },
  {
    id: "using-machine-learning-methods-forecast-solar-flares-cmes-seps",
    title:
      "Using Machine Learning Methods to Forecast if Solar Flares Will Be Associated with CMEs and SEPs",
    description:
      "Machine learning methods use magnetic active-region features to distinguish flares, flare-associated CME/SEP events, and CME-only events.",
    link: "https://iopscience.iop.org/article/10.3847/1538-4357/aac81e",
    year: "2018",
    source: "The Astrophysical Journal",
    noteDate: "2026-06-05",
    reflection: [
      "This paper investigates if machine learning techniques can distinguish between three types of solar events based on the magnetic properties of solar active regions (ARs). These three types include: Flares only, flares accompanied by both coronal mass ejections (CMEs) and solar energetic particles (SEPs), and CMEs occurring without associated flares or SEPs. 18 magnetic-field features were extracted from the SDO/HMI SHARPs dataset, and were combined with information from the DONKI and GOES databases. Two machine learning techniques were explored: Support Vector Machines (SVMs) with a radial basis function kernel, as well as Multilayer Perceptrons (MLPs). The problem was formulated as a three-class classification task, and the models were trained using stratified k-fold cross-validation. Rather than detecting if an eruption will occur at all, the paper is focused on determining which type of eruption an active region is likely to produce.",
      "Both methods performed very well, with SVMs slightly outperforming MLPs in general. The best forecasts were obtained very far in advance, roughly 96 hours before an event occurred. For predicting flares accompanied by CMEs and SEPs, the SVM achieved a TSS of 0.92 +- 0.09 and HSS of 0.92 +- 0.08, while the MLP reached TSS = HSS = 0.93 +- 0.04. For CME-only events, performance was higher, reaching TSS/HSS of 0.98-0.99 at a 108-hour forecast window. The SHARPs magnetic features possess a strong discriminative power that machine learning can distinguish between. The dataset was noted to be relatively small due to the quieter nature of Solar Cycle 24, and the dataset did not include non-eruptive active regions.",
    ],
  },
  {
    id: "long-tailed-recognition-routing-diverse-distribution-aware-experts",
    title: "Long-Tailed Recognition By Routing Diverse Distribution-Aware Experts",
    description:
      "RIDE uses diverse distribution-aware experts and routing to improve rare-class recognition without sacrificing common-class performance.",
    link: "https://openreview.net/pdf?id=D9I3drBz4UC",
    year: "2021",
    source: "ICLR",
    noteDate: "2026-06-10",
    reflection: [
      "The paper introduced RIDE (RoutIng Diverse Distribution-Aware Experts), a long-tailed image classification method focused on improving recognition performance on rare classes without sacrificing performance on common classes. Existing methods were examined via a bias-variance decomposition, showing that most approaches reduce tail-class bias but as a result, substantially increase model variance and leave a large head-tail performance gap. To address this, RIDE uses a multi-expert architecture where several experts share early network layers but have separate layers later in training. Each expert has its own classification loss, while a novel distribution-aware diversity loss encourages the experts to make complementary decisions, more so for rare classes. At inference time, a learned routing module decides which experts should be considered for a given sample.",
      "RIDE achieved state-of-the-art performance across major long-tail benchmarks. On CIFAR100-LT, RIDE improved accuracy from 43-44% to 49.1%, while simultaneously improving many-shot, medium-shot, and few-shot categories. On ImageNet-LT, it achieved up to 55.4% top-1 accuracy, outperforming prior methods such as LWS and cRT by over 7%. On iNaturalist 2018, RIDE reached 72.6% top-1 accuracy, exceeding the previous state-of-the-art by 6.3% while improving few-shot accuracy without degrading performance on the many-shot categories. ",
    ],
  },
  {
    id: "solar-energetic-particle-event-occurrence-prediction-soft-xray-machine-learning",
    title:
      "Solar Energetic Particle Event occurrence prediction using Solar Flare Soft X-ray measurements and Machine Learning",
    description:
      "Uses GOES soft X-ray flare measurements and machine learning to predict SEP event occurrence.",
    link: "https://www.swsc-journal.org/articles/swsc/full_html/2021/01/swsc210024/swsc210024.html",
    year: "2021",
    source: "Journal of Space Weather and Space Climate",
    noteDate: "2026-06-12",
    reflection: [
      "The paper used a machine learning approach for predicting if a solar slate will be followed by a Solar Energetic Particle (SEP) event using only soft X-ray measurements from the GOES satellites. A large dataset across 25 years, containing roughly 18,000 solar flares without associated SEPs and 220 flares that did produce SEPs.For each flare, 24 features were extracted from the X-ray time series (including peak fluxes, fluences, and some derived quantities) and used as input for the network. To address the class imbalance between SEP and non-SEP events, a weighted cross-entropy loss function was used that penalized SEP misclassifications much more heavily than non-SEP errors. The final predictor was a combination of multiple neural networks whose probability outputs were averaged to produce the final SEP occurrence prediction.",
      "The results demonstrated that the model had an average SEP detection rate of about 89.6% while correctly identifying non-sep events 92.3% of the time, leading to a mean True Skill Statistic (TSS) of 0.819. The model also achieved an ROC AUC of 0.938 when using the full flare dataset. The soft X-ray measurements contain substantial predictive information about SEP occurrence. The SEP events missed by the model tended to be weaker events, which has been a common theme throughout multiple papers.",
    ],
  },
  {
    id: "guide-gated-uncertainty-informed-disentangled-experts-long-tailed-recognition",
    title:
      "GUIDE: GATED UNCERTAINTY-INFORMED DISENTANGLED EXPERTS FOR LONG-TAILED RECOGNITION",
    description:
      "GUIDE uses gated uncertainty-informed disentangled experts to improve long-tailed recognition across major benchmarks.",
    link: "https://openreview.net/pdf?id=jY21fwcrjr",
    year: "2026",
    source: "ICLR",
    noteDate: "2026-06-15",
    reflection: [
      "The paper proposed GUIDE (Gated Uncertainty-Informed Disentangled Experts), a multi-expert framework for long-tailed recognition (LTR) that argues other expert-based methods are limited by three forms of entanglement: experts learn overly similar representations, adaptation policies cannot distinguish between model uncertainty and data ambiguity, and meta-learning and task learning interfere during optimization. GUIDE addresses this with a hierarchical three-level design. It enforces specialization among experts by decorrelating features and setting prediction-diversity objectives, encouraging the experts to learn different representations rather than converging on head-class features. It also introduced an uncertainty-guided adaptation mechanism that breaks down predictive uncertainty into epistemic uncertainty (model ignorance) and aleatoric uncertainty (data ambiguity). These estimates drive a Dynamic Expert Refinement Module (DERM), which allocates additional model capacity only when it is beneficial. GUIDE employs a two-timescale optimization strategy, where the primary classification network gets updated while the meta controlling expert refinement is updated slowly on validation data, which helps improve optimization stability.",
      "Across major long-tailed benchmarks such as CIFAR-100LT, ImageNet-LT, iNaturalist 2018, Places-LT, and CIFAR-10-LT, GUIDE achieved state-of-the-art or near it performance. On CIFAR-100-LT with imbalance ratio 100, GUIDE improved overall accuracy to 56.4%, outperforming previous methods, while achieving large gains on the difficult few-shot classes (36%, up from previous best 31.2%). Similar improvements were observed on ImageNet-LT (62.5%), iNaturalist 2018 (76.1%), and Places-LT(42.2%). Ablation studies show that each of GUIDE’s three disentanglement levels contribute independently to performance and that combining all 3 yields the best results.",
    ],
  },
  {
    id: "assessing-predictability-solar-energetic-particles-machine-learning-techniques",
    title:
      "Assessing the Predictability of Solar Energetic Particles with the Use of Machine Learning Techniques",
    description:
      "Machine-learning classifiers use flare, CME, and solar-cycle features to predict SEP occurrence under realistic class imbalance.",
    link: "https://link.springer.com/article/10.1007/s11207-021-01837-x",
    year: "2021",
    source: "Solar Physics",
    noteDate: "2026-06-17",
    reflection: [
      "This paper presented a machine-learning framework for predicting if a solar flare and/or CME will produce an SEP event. The authors formulated SEP forecasting as a highly imbalance binary classification problem, since SEP-producing CMEs are rare compared to the total number of CMEs. The datasets contain flare properties (longitude, soft X-ray peak intensity, fluence, duration, rise time), CME properties (speed and width), and solar cycle information, then evaluate a variety of techniques such as logistic regression, support vector machines, neural networks, decision trees, random forests, extremely randomized trees, and extreme gradient boosting. The paper used a rigorous nested 5x5 cross-validation framework for hyperparameter optimization, class weighting to address imbalance, and a feature-importance analysis.",
      "Using both flare and CME information together produced substantially better predictions than using either source alone.. Among all methods tested, the Random Forest model performed best on the realistic imbalance dataset, achieving a Probability of Detection of 0.76 +- 0.06, False Alarm Rate of 0.34 +- 0.10, True Skill Statistic of 0.75 +- 0.05, and Heidke Skill Score of 0.69 +- 0.04. Logistic Regression produced the lowest false-alarm rates but missed more SEP events, while tree-based ensemble methods generally achieved the highest detection rates. Training on artificially balanced datasets tends to yield overly optimistic results that do not translate well to real-word SEP forecasting. Feature-importance analysis revealed that CME speed, CME width, and flare soft X-ray fluence are the most informative predictors of SEP occurrence.",
    ],
  },
  {
    id: "improve-representation-imbalanced-regression-geometric-constraints",
    title:
      "Improve Representation for Imbalanced Regression through Geometric Constraints",
    description:
      "This paper introduces Surrogate-driven Representation Learning (SRL), a method for deep imbalance regression (DIR) that focuses on improving the geometry of the learned feature space instead of just modifying loss or sample weights.",
    link: "https://openaccess.thecvf.com/content/CVPR2025/papers/Dong_Improve_Representation_for_Imbalanced_Regression_through_Geometric_Constraints_CVPR_2025_paper.pdf",
    year: "2025",
    source: "CVPR",
    noteDate: "2026-06-22",
    reflection: [
      "This paper introduces Surrogate-driven Representation Learning (SRL), a method for deep imbalance regression (DIR) that focuses on improving the geometry of the learned feature space instead of just modifying loss or sample weights. Unlike classification where classes form separate clusters, regression features should form a continuous latent space that follows the progression of the target variable. The paper defines a new notion of uniformity for regression using two geometric constraints. The first, which is called Enveloping Loss, encourages the latent space to spread across and take up as much of the hypersphere feature space as possible, which helps prevent collapse in regions dominated by many-shot classes. The second, which is called Homogeneity Loss, encourages the latent space to be smooth and to have representations spaced evenly along it, to avoid irregular gaps and clustering. Since these losses require a global view of the label range, the paper introduced SRL, which maintains a surrogate set of label-bins collected across mini-batches and epochs, which allows the geometric constraints to be applied over the entire regression label space.",
      "Experimental results showed that SRL improved performance across multiple imbalanced regression benchmarks, such as AgeDB-DIR, IMDB-WIKI-DIR, STS-B-DIR, several curated UCI-DIR tabular datasets, and a newly proposed Imbalanced Operator Learning (IOL) benchmark. On AgeDB-DIR, SRL reduced overall MAE from 7.67 to 7.22 while improving few-shot region MAE from 12.61 to 9.81. Similar gains were shown on IMDB-WIKI-DIR, STS-B-DIR, and UCI-DIR, with SRL achieving the best overall and few-shot results often. The method improved existing imbalance regression approaches including LDS/FDS, RankSim, BalancedMSE, and ConR when combined with them, showing that SRL is complementary to existing methods. Feature visualizations in the paper show SRL producing a much more uniform distribution, allowing underrepresented target regions to occupy much more feature-space volume.",
    ],
  },
  {
    id: "interpretable-machine-learning-forecast-sep-events-solar-cycle-23",
    title: "Interpretable Machine Learning to Forecast SEP Events for Solar Cycle 23",
    description:
      "Uses interpretable machine learning with SMARP active-region magnetic features to forecast SEP-producing flares for Solar Cycle 23.",
    link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2021SW002842",
    year: "2022",
    source: "Space Weather",
    noteDate: "2026-06-26",
    reflection: [
      "This paper investigates if Space-Weather MDI Active Region Patches (SMARPs), a new dataset derived from SHOHO/MDI magnetograms, can be used to predict if a solar flare will produce an SEP event. Rather than using the flare itself as the primary predictor, focus is put onto the magnetic properties of the active region measured before the flare peak, providing an average forecasting lead time of roughly 55 minutes. Five SMARP-derived features (such as total unsigned magnetic flux, active region area, magnetic field gradient, R-value, and angular distance from Earth’s magnetic footprint) were evaluated using several interpretable machine learning methods, including Support Vector Machines, logistic regression, and ridge regression. Since only 65 positive SEp events were available compared to over 6,500 negative samples, balanced training/testing splits were used for 100 Monte Carlo bootstrap runs to estimate performance.",
      "The results showed that the best SMARP-only model, a third-degree polynomial SVM using total unsigned flux and active-region distance, correctly predicted SEP-producing flares with an accuracy of 0.72 +- 0.12, achieving a TSS of 0.47 +- 0.24 and HSS of 0.44 +- 0.25. When conventional flare information such as peak X-ray intensity was included, performance improved substantially, reaching roughly 91-92% accuracy and TSS/HSS values around 0.84, demonstrating that flare intensity is the single strongest SEP predictor. The SMARP features are available before the flare reaches peak intensity, which can help give additional forecasting lead time. SMARP measurements are best to be viewed as an early-warning complement to flare-based predictors, helping to provide interpretable magnetic-field information that can improve prediction of SEP events while extending the available warning time.",
    ],
  },
  {
    id: "balanced-sharpness-aware-minimization-imbalanced-regression",
    title: "Balanced Sharpness-Aware Minimization for Imbalanced Regression",
    description:
      "BSAM reweights the SAM perturbation step by inverse target-bin frequency to improve rare-region generalization in imbalanced regression.",
    link: "https://openaccess.thecvf.com/content/ICCV2025/papers/Liu_Balanced_Sharpness-Aware_Minimization_for_Imbalanced_Regression_ICCV_2025_paper.pdf",
    year: "2025",
    source: "ICCV",
    noteDate: "2026-06-29",
    reflection: [
      "The paper proposes Balanced Sharpness-Aware Minimization (BSAM), an algorithm designed specifically for imbalance regression. The key problem is not data imbalance, but imbalanced generalization. Models generalize well to common target values but poorly to rare ones due to the loss landscape around those regions being sharper. Building on top of the Sharpness-Aware Minimization (SAM) algorithm, BSAM introduces a targeted reweighting strategy during the perturbation step of SAM. Instead of changing the regression loss, BSAM computes the adversarial parameter perturbation using importance weights derived by the inverse frequency of target-value bins. This results in rare regions to have greater influence when estimating the sharpest direction in parameter space. This encourages the model to learn flat loss landscapes across both common and rare target values, improving generalization without adding computational complexity or requiring a specialized loss function.",
      "The method was evaluated across three imbalance computer vision regression benchmarks, AgeDB-DIR, IMDB-WIKI-DIR, and NYUD2-DIR. Across all datasets, BSAM consistently achieved state-of-the-art performance, outperforming approaches such as LDS, FDS, RankSim, Rank-N-Contrast, Balanced MSE, and standard SAM. On AgeDB-DIR, BSAM reduced the overall MAE from 6.391 to 6.067 compared to the strong SQINV baseline while improving few shot performance from 8.380 to 7.928. Similar improvements were shown on IMDB-WIKI-DIR (overall MAE 7.040 to 6.811) and NYUD2-DIR (RMSE 1.341 to 1.272), with strong gains on rare target values. Additional experiments showed BSAM improved performance regardless of the underlying regression loss, outperforms previous SAM variants designed for class imbalance, and produces significantly flatter loss landscapes in low-density regions.",
    ],
  },
  {
    id: "up-to-1-hour-forecasting-radiation-hazards-solar-energetic-ion-events-relativistic-electrons",
    title:
      "Up to 1-hour forecasting of radiation hazards from solar energetic ion events with relativistic electrons",
    description:
      "An empirical SEP forecasting algorithm uses relativistic electron intensity and rise-rate features to estimate hazardous proton flux roughly one hour ahead.",
    link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2006SW000268",
    year: "2007",
    source: "Space Weather",
    noteDate: "2026-07-01",
    reflection: [
      "The paper proposes an empirical short-term forecasting algorithm for SEP events that uses relativistic electrons as an early warning mechanism. Section 5 introduces the forecasting algorithm. Relativistic electrons consistently arrive at Earth roughly 63 minutes before hazardous 30-50MeV protons on average and that the electron intensity increase rate is strongly correlated with the later proton intensity increase. Rather than relying solely on electron rise rate, the forecasting algorithm combines two electron-derived features: the maximum electron rise parameter measuring within a sliding 5-60 minute window and the current relativistic electron intensity. Historical observations from 1996-2002 are used to populate a 13 x 18 forecasting matrix, where each cell contains the average proton intensity measured one hour later for a given combination of electron intensity and rise rate. During operation, the current electron measurements get mapped into this matrix to estimate the proton flux expected roughly one hour in the future, acting as a lookup table.",
      "The method was shown to successfully reproduce the timing and approximate magnitude of major proton events, even during the extreme Halloween solar storms. The predicted proton intensities closely follow the observed intensities during event onsets, although the forecasts tends slightly overestimate the decay phase due to the matrix being designed to predict event onset instead of recovery. When converted into an operational warning system, the method issued advance warnings for all 4 hazardous SEP events that occurred during the test period, providing advance warning times ranging from 7 to 74 minutes. The algorithm produced only a handful of false warnings, which were mostly due to declining fluxes from previous events or interplanetary shock events.",
    ],
  },
  {
    id: "balanced-mse-imbalanced-visual-regression",
    title: "Balanced MSE for Imbalanced Visual Regression",
    description:
      "Balanced MSE corrects standard MSE for imbalanced visual regression by accounting for the training label distribution.",
    link: "https://openaccess.thecvf.com/content/CVPR2022/papers/Ren_Balanced_MSE_for_Imbalanced_Visual_Regression_CVPR_2022_paper.pdf",
    year: "2022",
    source: "CVPR",
    noteDate: "2026-07-06",
    reflection: [
      "This paper proposes Balanced Mean Squared Error (Balanced MSE), a new loss function for imbalanced regression that addresses a fundamental issue within standard MSE loss. Traditional MSE learns the training label distribution, which is often heavily skewed towards common values, causing the model to underperform on rare targets. Instead of increasing the weight of rare samples, the algorithm derives a statistically principled correction from Bayes’ theorem that adjusts the predicted conditional distribution to account for the imbalance in the training labels. The resulting Balanced MSE has a standard MSE term and an additional balancing term that incorporates the training label distribution. The paper proposes several implementations of the idea, including a Gaussian Mixture Model (GAI) version with closed-form integration, a Batch-based Monte Carlo (BMC) implementation that requires no prior knowledge of the label distribution and estimates it from the mini-batch, and a Bin-based Numerical Integration (BNI) version that leverages kernel destiny estimation for one-dimensional regression tasks. Another advantage is that the required noise parameter can be learned automatically during training, avoiding extensive hyperparameter searches. ",
      "The proposed method outperformed previous state-of-the-art approaches across both synthetic and real-world benchmarks. On synthetic regression problems, Balanced MSE remained accurate even as label imbalance became more severe, while traditional importance reweighting degraded substantially. On the IMDB-WIKI age estimation benchmark, Balanced MSE achieved the best balanced MAE, improving from 13.09 to 12.66-12.69, with large improvements on underrepresented age groups. On the NYUD2 depth estimation dataset, it reduced RMSE from 1.387 to 1.251. Balanced MSE is the first general approach applicable to high-dimensional imbalance regression through a new Human Mesh Recovery benchmark, where it significantly improved balanced pose reconstruction accuracy over existing methods.",
    ],
  },
  {
    id: "forecasting-solar-energetic-particle-events-solar-cycles-23-24-interpretable-machine-learning",
    title:
      "Forecasting Solar Energetic Particle Events During Solar Cycles 23 and 24 Using Interpretable Machine Learning",
    description:
      "Interpretable machine learning on merged SMARP/SHARP active-region data modestly improves SEP event forecasting across Solar Cycles 23 and 24.",
    link: "https://iopscience.iop.org/article/10.3847/1538-4357/ad6f0e/",
    year: "2024",
    source: "Astrophysical J",
    noteDate: "2026-07-10",
    reflection: [
      "The paper investigates whether a newly merged SMARP/SHARP dataset, which spans Solar Cycles 23 and 24, can improve the prediction of SEP events using machine learning techniques. Active region magnetic field measurements were matched with solar flares and then labeled according to whether the flare produced an SEP event. Multiple forecasting datasets were produced by selecting magnetic field measurements taken 2, 5, or 10 hours before the flare’s onset, using six physical predictors detailing magnetic flux, magnetic field gradients, and magnetic connectivity to Earth. A “clean” dataset was created by removing non-SEP-producing flares that occurred within SEP-producing active regions, reducing ambiguous training examples. Statistical analysis showed the total unsigned magnetic flux (USFLUXL and USFLUXZ), R_VALUE (unsigned flux near polarity inversion lines), and the angular distance to Earth’s magnetic foot point (ANG_DIST) were the most informative predictors, while the magnetic field gradient showed little discriminative power.",
      "To evaluate the predictors, several machine learning models were used, including linear, polynomial, radial basis function (RBF), and sigmoid support vector machines (SVMs) along with logistic and ridge regression models. Hyperparameters were optimized using GridSearchCV, and each configuration was evaluated over 100 independent training/testing runs under balanced and naturally imbalance class distributions. The strongest-performing predictor pair was R_VALUE and ANG_DIST, with the best model (balanced logistic regression trained on the clean dataset) achieving roughly 70% accuracy, while the best operational model reached only 56% accuracy, only modestly exceeding random guessing. Increasing the dataset to cover two solar cycles produced a slight improvement in operational accuracy, although metrics such as F1 score, false-alarm rate, and skill scores improved more noticeably. ",
    ],
  },
  {
    id: "improving-deep-regression-with-ordinal-entropy",
    title: "IMPROVING DEEP REGRESSION WITH ORDINAL ENTROPY",
    description:
      "Ordinal Entropy regularizes regression representations with diversity and tightness terms to preserve target order while increasing feature-space entropy.",
    link: "https://openreview.net/pdf/3fa28db76e89d4a3ce4e48a57a415e706ad74b51.pdf",
    year: "2023",
    source: "ICLR",
    noteDate: "2026-07-13",
    reflection: [
      "This paper notes a common observation in computer vision: deep learning models achieve better performance by reformulation regression problems as classification tasks, even though regression targets are continuous. The advantage stems from differences in the learned feature representations as opposed to task-specific factors. Standard mean squared error (MSE) loss used for regression encourages features corresponding to similar targets to cluster together but does not encourage the overall feature space to spread out, resulting in low-entropy latent representations. In contrast, classification with cross-entropy minimizes intra-class variation while maximizing the diversity of class representations, producing higher entropy feature spaces that contain more informative representations. To bridge the gap without sacrificing ordinal relationship inherent to regression targets, Ordinal Entropy was introduced. It is a regularization method that augments the regression loss with two additional terms: a diversity term, which pushes feature centers apart relative to the differences between their target values, and a tightness term, which keeps features associated with similar targets closer together. This lets the model retain the ordering of continuous labels while learning a richer, more discriminative latent space.",
      "The method was evaluated on a synthetic operator-learning task and several real-world regression problems, such as depth estimation, crowd counting, and age estimation. Across all experiments, the ordinal entropy regularizer consistently improved performance over standard regression models and also improved state-of-the-art regression architectures. On the NYU Depth V2 benchmark, adding the regularizer improved the ResNet-50 baseline across every evaluation metric and further improved the performance of the state-of-the-art NeW-CRFs model. Similar improvements were seen in the crowd counting dataset, where mean absolute and squared errors decreased, and for age estimation, where overall MAE and geometric mean error were reduced. Ablation studies showed that both preserving ordinal relationships and explicitly increasing feature-space entropy are important for achieving these gains.",
    ],
  },
  {
    id: "improving-deep-regression-with-ordinal-entropy-sep-spectra",
    title: "IMPROVING DEEP REGRESSION WITH ORDINAL ENTROPY",
    description:
      "A decision-tree regression approach predicts full SEP peak proton flux and fluence spectra across multiple energy channels.",
    link: "https://iopscience.iop.org/article/10.3847/2041-8213/ad8bbc",
    year: "2024",
    source: "Astrophysical Journal Letters",
    noteDate: "2026-07-17",
    reflection: [
      "This paper presents a machine learning regression approach for predicting the full energy spectra of SEP events, rather than predicting whether an SEP event will occur. A decision tree regression model combined with cost-complexity pruning (CCP) to estimate both peak proton flux spectrum and the event-integrated fluence spectrum across 11 proton energy channels (5-289 MeV). The model takes seven physical inputs describing the associated solar eruption: solar wind speed, flare longitude/latitude, flare peak and integrated soft X-ray flux, and CME speed and width. The model predicts the proton flux in one energy channel first, then feeds the prediction into the regression models for neighboring energy channels, exploiting the strong correlations between adjacent energy ranges. The iterative prediction strategy significantly improved performance compared to directly predicting all energy channels simultaneously while maintaining the interpretability and efficiency of the decision trees.",
      "The proposed method achieved R-squared values greater than 0.95 for nearly every energy channel on both the training and test sets, with low mean squared error across both peak flux and fluence predictions. The model also successfully reproduced the complete energy spectra for historical SEP events and generalized well to an unseen extreme event, the 2024 May 13 Ground Level Enhancement, showing it can accuracy predict spectra outside of the original training dataset. The model outperformed previous SEP spectrum prediction methods. The model was trained with only 114 labeled SEP events, so testing on larger datasets with more features and events could further improve model performance.",
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
    noteDate: "[Add YYYY-MM-DD note date]",
    reflection: [
      "[Write a paragraph describing the main ideas and why this reading matters to me.]",
      "[Add a second paragraph for key takeaways, examples, or how it connects to other things I have read.]",
      "[Capture any insights, open questions, or follow-up ideas here.]",
    ],
  },
];

const sortedSummaryTemplates = [...summaryTemplates].sort((a, b) => {
  const aTime = Date.parse(a.noteDate);
  const bTime = Date.parse(b.noteDate);

  if (Number.isNaN(aTime)) {
    return 1;
  }

  if (Number.isNaN(bTime)) {
    return -1;
  }

  return aTime - bTime;
});

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
          {sortedSummaryTemplates.map((template) => (
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
